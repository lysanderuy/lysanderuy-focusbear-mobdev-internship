# Onboarding Task - Using Native Modules and Bridging in React Native

## Trying out config and native modules in the Milestone-8 app

Inside `milestone-8-react-native-fundamentals/react-native-app`, I explored two related topics:
configuration handling and custom native modules.

For configuration, I checked whether `react-native-config` was already being used or whether it should be added. The
app was already using Expo-style environment variables through `process.env.EXPO_PUBLIC_SENTRY_DSN`, backed by `.env`
and `.env.example`. Because this project is still Expo-managed and does not have committed `ios/` or `android/`
folders, I kept the Expo approach and documented that `react-native-config` would only make sense later in a prebuilt
or bare workflow where native build-time injection is actually needed.

For native modules, I added a small local Expo Module demo under `modules/native-demo-module`. It exposes a single
cross-platform function called `getNativeDemoInfo()` that returns a simple object with a `platform` and `message`.
The sandbox tab in the milestone-8 app now includes a "Run Native Module Demo" button that calls the module from
JavaScript and shows the returned native response when it is available.

## Proof of trying it out

The config proof is visible in the milestone-8 app setup:

- `lib/sentry.ts` reads `EXPO_PUBLIC_SENTRY_DSN`
- `.env.example` includes the Sentry DSN key
- `README.md` now explains why Expo env handling is the right fit instead of `react-native-config`

The native module proof is visible in the local Expo Module integration:

- `modules/native-demo-module/android/.../NativeDemoModule.kt` returns an Android-specific response
- `modules/native-demo-module/ios/NativeDemoModule.swift` returns an iOS-specific response
- `lib/native-demo.ts` provides the typed JavaScript wrapper
- `app/(tabs)/sandbox.tsx` calls the module and displays loading, success, and fallback states

I also verified the setup with checks that passed locally:

- `npm run lint`
- `npx tsc --noEmit`
- `npx expo-modules-autolinking search --platform android`

The autolinking check found `native-demo-module`, which confirms Expo can discover the custom module. The runtime test
behavior is that a development build should show the platform-specific response, while Expo Go will show the fallback
message because it does not include custom native code compiled into its binary.

## Reflection

### Why would you need to use native modules in a React Native app

You need native modules when JavaScript alone cannot access a device capability or platform API that your app
requires. Examples include integrating a platform-specific SDK, exposing custom device functionality, using a native
library that has no good JavaScript-only alternative, or optimizing performance-sensitive work that is better handled
closer to the platform layer. In an Expo app, this decision usually comes after checking whether an Expo SDK package
or config plugin already solves the problem. Native modules are most useful when the feature is genuinely custom and
cannot be handled well by existing cross-platform abstractions.

### How does React Native communicate with native code

React Native communicates with native code by exposing native functionality as modules that JavaScript can call. In
older bridge-based designs, data moved back and forth asynchronously across the React Native bridge. In newer systems,
including Expo Modules and the newer React Native architecture, this communication can be more direct and structured,
with native methods registered under a module name and then accessed from JavaScript through typed wrappers. In this
milestone app, the JavaScript side calls `getNativeDemoInfo()`, and the Android or iOS implementation returns a plain
object that React Native can pass back to the JavaScript runtime.

### What are some challenges of maintaining native bridges

Maintaining native bridges adds complexity because the feature has to stay consistent across JavaScript, Android, and
iOS at the same time. A change in the data contract or method signature needs to be reflected in multiple languages
and build systems, which increases the risk of drift. Teams also need to manage platform differences, native build
errors, dependency upgrades, autolinking issues, and testing in environments where custom modules may not exist, such
as Expo Go. Another challenge is that debugging becomes more involved because failures can come from JavaScript, the
bridge layer, or the native implementation itself. That is why it is usually best to use native modules only when the
extra power is worth the additional maintenance cost.
