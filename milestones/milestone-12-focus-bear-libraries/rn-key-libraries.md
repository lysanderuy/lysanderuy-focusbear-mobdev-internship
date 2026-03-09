# Onboarding Task - Understanding Key Libraries Used in Focus Bear

## Three Key Libraries I Picked

### redux-persist

`redux-persist` keeps selected parts of Redux state saved to local storage so data survives app restarts.
In Focus Bear, this is useful for session-related data, preferences, and app state that should not reset every time
the app closes. I like this because it matches the smooth experience I usually aim for in web apps where users expect
their progress and preferences to stay intact.

### react-native-auth0

`react-native-auth0` handles login flows, token management, and identity provider integration without building
auth infrastructure from zero. In Focus Bear, it supports secure authentication with less custom security risk and
faster implementation. From my perspective, this is a practical choice because I would rather spend effort on product
features than rebuild complex auth edge cases.

### posthog-react-native

`posthog-react-native` tracks user events so the team can see how features are actually being used. In Focus
Bear, it helps identify drop-off points, confusing flows, and high-value behaviors that should be optimized. This
gives product and engineering teams evidence to prioritize changes that improve real user outcomes.

## Unfamiliar Library Summary

### react-i18next

`react-i18next` is the React binding for `i18next`, giving components access to translation functions and
language-aware rendering. It usually works through hooks like `useTranslation`, so UI text comes from translation
keys instead of hardcoded strings. I was less familiar with this at first, but after reading it, I can see it keeps
multilingual UI changes cleaner because translation updates stay in resource files.

## Reflection

### What is the purpose of Redux-Persist, and why is it useful

`redux-persist` stores selected Redux state into persistent storage and rehydrates it when the app starts again.
This prevents important state from being lost between sessions, which is useful for settings, onboarding progress, and
cached app context. It reduces friction because users do not need to repeat setup steps after reopening the app.

### How does react-native-background-fetch differ from a normal timer

`react-native-background-fetch` is designed for OS-managed background execution, while normal timers only run
reliably when the app is active in the foreground. Mobile operating systems throttle or pause regular timers when apps
are backgrounded, but background fetch integrates with native scheduling rules. That makes it better for periodic sync
or maintenance tasks that must still happen when users are not actively using the app.

### Why does Focus Bear use Auth0 instead of handling authentication manually

Auth0 provides hardened authentication flows, token lifecycle handling, and identity-provider support out of
the box. Building all of that manually is slower and increases security risk, especially around edge cases like token
refresh, social login, and secure session handling. Using Auth0 lets the team focus on product features while relying
on a mature auth platform.

### How does PostHog help improve the user experience in Focus Bear

PostHog shows how users move through features by capturing events, funnels, and behavior trends. This helps the
team detect friction points, such as where users abandon setup or stop engaging with a feature. With that data,
improvements can be prioritized based on real behavior instead of guesswork.

### What’s the difference between Sentry and PostHog, and when would you use each

Sentry is for technical reliability, especially crash reporting, stack traces, and error diagnostics. PostHog
is for product analytics, such as feature usage, engagement, retention, and behavior flows. I would use Sentry to fix
stability problems and PostHog to improve product decisions and user journey quality.

### How does react-native-localize work, and how does it interact with i18next

`react-native-localize` reads device locale information like language and region from the operating system.
`i18next` uses that locale signal to choose the best matching translation resources and fallbacks. Together, they let
the app automatically start in the user’s preferred language while still supporting manual language switching.

### If you had to remove one library and replace it with an alternative, which one would you choose and why

If I had to replace one, I would swap `@rneui/themed` with NativeWind, which is the Tailwind-style approach for
React Native. I have a strong web background and I use Tailwind a lot, so NativeWind would fit how I already think
about styling and speed up my workflow. The tradeoff is rewriting some existing component styling patterns, but I
would accept that for better consistency and faster UI iteration.
