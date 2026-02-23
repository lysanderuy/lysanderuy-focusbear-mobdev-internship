# Onboarding Task - Setting up a React project

## Reflections

### What challenges did you face during setup

Honestly, I did not face significant challenges while setting up this React project with Vite and Tailwind CSS.
Having prior experience with React and modern front-end tooling made the process straightforward.

That said, this exercise was still valuable as it reinforced the **best practices for setting up a project from
scratch**, including:

- Initializing a React project with Vite.
- Installing and configuring Tailwind CSS v4 using the official Vite plugin.
- Ensuring CSS imports and plugin configuration work correctly.

Even when familiar with the setup, going through the official documentation helped me **confirm the most current
recommended approach** and solidify my understanding of Vite + Tailwind integration.

### What happens if we modify state directly instead of using setState

In React, you should always update state using the setter function like `setCount`, because changing the state variable
directly won’t make the component re-render, so the UI won’t update. Doing it directly can also lead to unexpected
behavior since React won’t track the change properly.

### Why are components important in React

Components are important in React because they let you break your UI into small, reusable pieces, which makes your code
easier to manage. They also let parts of your app have their own state and receive data through props, so React can
update the UI efficiently when things change.

### What are some common issues when working with lists in React

#### Common Issues When Working with Lists in React

1. **Missing or bad `key`** – Using non-unique keys can cause bugs when items are added, removed, or reordered.
2. **Changing state directly** – Mutating arrays or objects in state directly prevents React from detecting changes.
3. **Mapping over `null` or `undefined`** – `.map()` requires an array; mapping over null or undefined will throw an
   error.
4. **Big lists** – Rendering very large lists can hurt performance; consider pagination, lazy-loading, or windowing
   libraries.
5. **Re-rendering too much** – Every state change re-renders the list; break items into separate components or
   use `React.memo`.
6. **Fragments without keys** – Returning fragments for list items without keys triggers React warnings.
7. **Updating nested data** – Updating objects inside arrays requires immutable updates to prevent bugs.
8. **Inputs inside lists** – Each input should have its own state; otherwise, all inputs may share the same value.
