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

### How does useMemo improve performance?

`useMemo` improves performance drastically by avoiding the need for re-calculation every render even when
re-calculation is not needed. We make use of the `useMemo` hook so that rendering only happens when our target
value or state changes. For example, the search filter that I implemented where the list only updates when the value
in the input field changes.

### When should you avoid using useMemo?

Generally when the computation is cheap, `useMemo` shouldn't be used. `useMemo` should only be used to optimize
performance and in cases where the calculation is simple, inexpensive and there is no actual performance issue to
solve, simply leaving the logic be is better than adding complexity by unnecessarily using `useMemo`.

### What happens if you remove useMemo from your implementation?

If I remove `useMemo` from my search filtering implementation, the filtering of all 5,000 users will run on every
single re-render. It will not only run when I change the input in the search field but it will also run when I click
on the "Re-render Only" button which is unrelated to the actual logic. It may still work but processing becomes
expensive and computation could be wasted with unwanted re-renders.
