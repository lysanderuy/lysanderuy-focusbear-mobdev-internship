# Onboarding Task - Setting up a React Native Development Environment (Expo & Metro Server)

## Reflections

### What is the role of Metro in React Native development

Metro is the JavaScript bundler that powers React Native during development. It takes your JavaScript code, bundles it
into a format the mobile app can understand, and serves it to your device or emulator. Metro also enables Fast Refresh
by watching your files for changes and instantly updating the app without a full reload.

### How does Expo simplify React Native development

Expo simplifies React Native development by providing a preconfigured environment so you can start building without
setting up native Android or iOS projects manually. It includes built-in APIs for common device features like camera,
location, and notifications, which removes the need to write native code for many tasks. Expo also provides tools like
Expo Go and cloud builds, making it easier to test and deploy apps.

### What issues did you encounter, and how did you resolve them

I encountered an issue where the app got stuck on the phone at “reloading… 89.09%,” which was likely caused by a Metro
cache or network handshake problem during the initial bundle. I fixed it by stopping Metro, restarting it with a cache
clear using npx expo start -c, then reopening Expo Go and re-scanning the QR code, which made the app load successfully.
I also couldn’t find App.js because the project used an Expo Router template that relies on the app/ routes structure,
so I edited index.tsx (the correct entry screen) instead and confirmed Fast Refresh and debugging worked.
