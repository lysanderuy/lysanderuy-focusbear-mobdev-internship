# Onboarding Task - React Hooks

## Reflections

### When should you use useEffect instead of handling logic inside event handlers

The `useEffect` React Hook should be used for logic that runs after the rendering of page, or sometimes depends on
the component mounting/unmounting. It is useful for running side effects like fetching data, subscriptions, timers,
or DOM manipulations. Basically, its used for anything that shouldn't happen directly in an event handler or render
cycle.

### What happens if you don’t provide a dependency array

If you don’t provide a dependency array, the effect will run after every render. This can cause unnecessary work,
repeated API calls, or state updates even when they’re not needed. It can make your component slower and
behave unpredictably.

### How can improper use of useEffect cause performance issues

Improper use of `useEffect` can hurt performance when effects run too often or create infinite loops by updating
state without proper dependencies. Heavy computations or repeated side effects inside an uncontrolled effect can
slow down your app. Always make sure to manage dependencies carefully to avoid unnecessary renders.
