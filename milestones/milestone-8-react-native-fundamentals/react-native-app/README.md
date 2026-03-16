# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created
with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory.
This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Environment variables

This milestone app already uses Expo environment variables instead of `react-native-config`.

1. Copy `.env.example` to `.env`.
2. Set `EXPO_PUBLIC_SENTRY_DSN` if you want to test Sentry from the sandbox tab.
3. Restart Expo after changing env values so Metro picks them up.

`react-native-config` is usually not the right fit for this project in its current state because this app is still an
Expo-managed app without committed native `ios/` and `android/` folders. If you later switch to a prebuilt or fully
bare React Native workflow and need native build-time env injection, that is the point where adding
`react-native-config` would make sense.

## Local Expo Module demo

This app now includes a small local Expo Module in `modules/native-demo-module` to demonstrate the
recommended way to add custom native code in an Expo-managed project.

Use this decision rule:

1. Prefer Expo SDK packages when a built-in capability already exists.
2. Use a config plugin when a library needs native project configuration.
3. Use an Expo Module when you need custom native behavior that Expo does not already provide.

The sandbox tab includes a "Run Native Module Demo" button that calls `getNativeDemoInfo()` from
native Android or iOS code.

To verify the module:

1. Start with `npx expo start`.
2. Build and open a development client for Android or iOS.
3. Open the sandbox tab and run the native module demo.

Expo Go may show the module as unavailable because local custom native modules are expected to run
in a development build.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where
you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with
  our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where
  you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
