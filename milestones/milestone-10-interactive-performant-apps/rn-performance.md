# Onboarding Task - Performance Optimization in React Native

## Trying it out (Applying `useMemo`, `useCallback`, and `React.memo`)

For this task, I optimized rendering in the Milestone 10 React Native app and investigated memory behavior and
profiling tools.

What I implemented:

1. Used `useMemo` to compute responsive layout metrics from screen width instead of recalculating values on
  every render.
2. Used `useMemo` to keep `ScrollView` container style references stable.
3. Extracted result UI rows into a `ResultCard` component and wrapped it with `React.memo`.
4. Used `useCallback` to memoize the card renderer function used in `results.map(...)`.

File updated:

- `react-native-app/app/(tabs)/sandbox.tsx`

Verification:

```bash
cd react-native-app
npx eslint "app/(tabs)/sandbox.tsx"
npm test -- --runInBand src/components/web/__tests__/MessageWidget.test.tsx src/components/web/__tests__/ApiDataWidget.test.tsx
```

Result summary:

- Lint completed with one existing warning unrelated to this optimization pattern (`require()` style import rule).
- Relevant tests passed (2 suites, 4 tests).

## Reflections

### What are the most common performance issues in React Native?

The most common issues are unnecessary re-renders, large unvirtualized lists, and expensive calculations running during
render. I also often see performance drops from creating new object/function references every render, which prevents
memoized children from skipping updates. On the memory side, leaks usually come from effects that forget cleanup
(timers, listeners, subscriptions) or long-lived references that keep large objects in memory.

### How do useMemo and useCallback improve performance?

`useMemo` caches computed values and only recalculates when dependencies change, which helps when calculations are
repeated or when stable object references are needed for child components. `useCallback` caches function references
so memoized children receiving callbacks do not re-render due to a new function identity each render. Together with
`React.memo`, they reduce avoidable rendering work when props and dependencies are unchanged.

### What tools can you use to measure and monitor app performance?

I can use React Native DevTools (including React Profiler, Performance, and Memory tabs), the in-app `Show Perf Monitor`
overlay (FPS, memory, JS heap), and native profilers like Xcode Instruments and Android Studio Profiler for deeper
device-level analysis. In Expo workflows, React Native DevTools is the recommended primary path for debugging and
profiling. A practical workflow is: measure baseline, profile a reproducible lag, apply one optimization, then
re-measure to confirm real improvement.
