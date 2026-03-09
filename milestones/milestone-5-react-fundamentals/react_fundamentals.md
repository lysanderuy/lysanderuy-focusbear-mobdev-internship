# Onboarding Task - Setting up a React project

## Components and Props Proof

<p align="center">
  <img width="650" alt="Image" src="https://github.com/user-attachments/assets/18f428f2-8189-471c-b804-993a3d10b47f" />
</p>

Code snippet showing dynamic prop usage with the `Focus Bear` name:

```jsx
// SandBox.jsx
import HelloWorld from "../components/HelloWorld";

<HelloWorld name="Focus Bear" />

// HelloWorld.jsx
export default function HelloWorld({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

## Working with Lists and User Input Proof

<p align="center">
  <img width="650" alt="Image" src="https://github.com/user-attachments/assets/fb30fd82-e4c3-4b5d-8f71-d3a32c09dcb1" />
</p>

Code snippet showing form input, add button, and dynamic list rendering with `.map()`:

```jsx
// SandBox.jsx
import ListInputForm from "../components/ListInputForm";

<ListInputForm />

// ListInputForm.jsx
import React, { useState } from "react";

export default function ListInputForm() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    setItems((previousItems) => [...previousItems, trimmedValue]);
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="button" onClick={handleAddItem}>
        Add
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}
```

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

### What are the advantages of client-side routing

Client-side routing makes navigation faster because the page doesn’t fully reload every time you switch views.
It creates a smoother experience since only the necessary components update, which makes the app feel more like
a native application. It also helps preserve state, so things like form inputs or data don’t reset when moving
between pages.
