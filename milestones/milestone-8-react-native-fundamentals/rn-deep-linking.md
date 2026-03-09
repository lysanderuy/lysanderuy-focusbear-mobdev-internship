# Onboarding Task - Handling Deep Linking and Routing

## Research: What is deep linking in React Native

Deep linking lets external URLs open a specific screen in the mobile app instead of always opening the default
home screen.

In this project, deep linking is handled through Expo Router (which is built on top of React Navigation).
Route files map directly to URL paths, so `app/library/[id].tsx` maps to `focusbear://library/:id`.

## Configuration done in this milestone

1. Configured URL scheme in Expo config:
   - File: `milestones/milestone-8-react-native-fundamentals/react-native-app/app.json`
   - Value: `"scheme": "focusbear"`
2. Added a deep-linkable screen:
   - File: `milestones/milestone-8-react-native-fundamentals/react-native-app/app/library/[id].tsx`
   - Route path: `/library/[id]`
3. Added URL handling for different app states on that screen:
   - `Linking.getInitialURL()` for cold start (app closed)
   - `Linking.addEventListener('url', ...)` for runtime links (foreground/background)
   - `AppState` listener to record app state when URL event is received

## How React Navigation handles deep linking here

Expo Router auto-generates navigation configuration and passes it to React Navigation internally:

1. It maps filesystem routes to navigation routes and URL paths.
2. It resolves the incoming URL to a screen.
3. It navigates to that route, including dynamic params (`[id]` -> `id`).
4. It supports both initial launch URLs and runtime URL events.

## Test commands

Run from `milestones/milestone-8-react-native-fundamentals/react-native-app`.

### Android (Expo CLI)

```bash
npx uri-scheme open "focusbear://library/42" --android
```

### iOS (Expo CLI)

```bash
npx uri-scheme open "focusbear://library/42" --ios
```

### Optional simulator/device commands

```bash
adb shell am start -W -a android.intent.action.VIEW -d "focusbear://library/42"
xcrun simctl openurl booted "focusbear://library/42"
```

## Proof checklist (what to capture)

1. App closed -> run deep link:
   - Screenshot the `Library Item` screen showing:
     - `ID: 42`
     - `Initial URL (closed app)` card populated with `focusbear://library/42`
2. App in background -> run deep link:
   - Screenshot the same screen showing at least one `runtime` event entry under:
     - `Runtime URL events (open/background)`
3. App already open in foreground -> run deep link:
   - Screenshot the same screen again with a new `runtime` event entry.

Use the same deep link URL for all three states so proof is consistent.

## Reflection

### What are the benefits of deep linking in mobile apps

1. Faster user navigation to exact content.
2. Better onboarding and conversion from email, web, notifications, and partner apps.
3. Better integration with external systems and automation workflows.
4. Improved UX because users avoid repetitive manual navigation.

### How does React Navigation handle deep linking

1. It reads incoming URLs from the platform linking APIs.
2. It maps URL paths to registered navigation routes.
3. It parses route parameters from the URL.
4. It restores or updates navigation state to open the correct screen.

In this app, Expo Router provides that linking config automatically because routes are file-based.

### What challenges might arise when implementing deep linking

1. Route mismatch between URL paths and navigation route names.
2. Different behavior across app states (closed, background, foreground).
3. Platform-specific setup differences for iOS and Android.
4. Handling invalid or missing parameters safely.
5. Security concerns (accept only trusted link formats and validate params).
