# Onboarding Task - Debugging React Native Apps (Flipper, Metro, and Console Logs)

## Debugging workflow and tools

I researched and practiced a practical React Native debugging flow using Metro logs, Flipper, React DevTools, and
network inspection.

### 1) Debugging with Metro logs

Metro is the React Native bundler and one of the first places to check when something fails.

- Start Metro and run the app:
  - `npm start` (or `npx expo start` for Expo projects)
  - `npm run android` / `npm run ios` (if using React Native CLI)
- Use Metro output to identify:
  - Bundle/build failures (syntax errors, module resolution errors, invalid imports)
  - Runtime JavaScript errors with stack traces
  - Warning patterns (deprecated APIs, unresolved assets, duplicate module versions)
- Use targeted logs in code for faster root-cause analysis:
  - `console.log` for values and flow checks
  - `console.warn` for suspicious states
  - `console.error` for unexpected branches and caught failures
- Keep logs intentional:
  - Prefix logs with feature names (example: `[Auth]`, `[Tasks]`)
  - Log IDs and key state transitions instead of dumping entire objects repeatedly

### 2) Flipper setup and exploration

Flipper provides a desktop debugging interface for React Native apps.

- Install Flipper desktop app and launch it before starting the app.
- Connect a simulator/emulator or physical device and open the app.
- Use common plugins:
  - `Logs`: view JavaScript and native logs in one place
  - `React DevTools`: inspect component tree, props, and hooks/state
  - `Network`: inspect requests, headers, payloads, timing, and responses
- Useful workflows:
  - Filter logs by keyword to isolate one feature
  - Reproduce a bug while watching logs and network timeline together
  - Compare successful and failed requests side-by-side

### 3) Using React DevTools for state and props

React DevTools helps inspect component behavior directly.

- Open React DevTools from Flipper (or standalone React Native Debugger setup if configured).
- Select a component in the tree and inspect:
  - Current props
  - Hook state values
  - Parent-child hierarchy and rerender behavior
- Validate assumptions while reproducing bugs:
  - Is the expected prop actually passed?
  - Does local state update when action handlers fire?
  - Is stale state causing incorrect UI output?

### 4) Debugging network requests in React Native

To debug API issues, inspect requests end-to-end.

- Open Flipper `Network` plugin while reproducing API calls.
- Validate for each request:
  - URL and HTTP method
  - Request headers (auth tokens, content type)
  - Request body format
  - Response status code and payload
  - Duration and retry patterns
- Pair this with app-side logging:
  - Log request start/end with endpoint and status
  - Log handled errors with server message and fallback behavior
- Common mistakes this catches quickly:
  - Wrong base URL or endpoint path
  - Missing/expired auth token
  - Incorrect JSON/body shape
  - Silent error swallowing in `catch` blocks

## Reflections

### How does Metro help in debugging a React Native app?

Metro helps by surfacing compile-time and runtime JavaScript problems early. It shows module resolution issues,
syntax problems, stack traces, and warnings in real time while the app reloads. This makes it the fastest feedback
loop for detecting where and when the app breaks during development.

### What debugging features does Flipper provide?

Flipper provides centralized debugging through logs, React component inspection, and network analysis. It lets me view
JavaScript/native logs, inspect props/state via React DevTools, and trace HTTP requests with headers, payloads,
status codes, and timings. This combination makes it easier to correlate UI bugs with data and system behavior.

### How can you inspect network requests in React Native?

I can inspect network requests by opening Flipper's `Network` plugin while reproducing app actions that trigger API
calls. Then I check request method, URL, headers, body, response status, response payload, and timing. I combine that
with targeted app logs around API calls to confirm where failures happen and whether error handling is working.
