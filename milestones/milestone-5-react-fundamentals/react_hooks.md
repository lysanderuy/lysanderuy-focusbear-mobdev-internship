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

### How does useMemo improve performance

`useMemo` improves performance drastically by avoiding the need for re-calculation every render even when
re-calculation is not needed. We make use of the `useMemo` hook so that rendering only happens when our target
value or state changes. For example, the search filter that I implemented where the list only updates when the value
in the input field changes.

### When should you avoid using useMemo

Generally when the computation is cheap, `useMemo` shouldn't be used. `useMemo` should only be used to optimize
performance and in cases where the calculation is simple, inexpensive and there is no actual performance issue to
solve, simply leaving the logic be is better than adding complexity by unnecessarily using `useMemo`.

### What happens if you remove useMemo from your implementation

If I remove `useMemo` from my search filtering implementation, the filtering of all 5,000 users will run on every
single re-render. It will not only run when I change the input in the search field but it will also run when I click
on the "Re-render Only" button which is unrelated to the actual logic. It may still work but processing becomes
expensive and computation could be wasted with unwanted re-renders.

### What problem does useCallback solve

In simpler terms, `useCallback` stops a child component from re-rendering when not needed. It also keeps the same
reference to the function so React doesn't think it changed because without it, when the parent component re-renders,
the function inside it may still be the same but its place in memory changes.

### How does useCallback work differently from useMemo

`useCallback` basically keeps the function the same. It tells React that its still the same function, don't change
it. `useMemo` on the other hand keeps the calculation or computation the same.

### When would useCallback not be useful

When the function is not passed to a child component, `useCallback` would not be needed. If functions are also simple
and cheap and do not need performance optimization, it also wouldn't be needed. Lastly, if the child isn't memoized,
stable functions won't help.
