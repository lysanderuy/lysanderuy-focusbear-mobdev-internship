# Onboarding Task - Setting up a React project

## Reflections

### What challenges did you face during setup?

Honestly, I did not face significant challenges while setting up this React project with Vite and Tailwind CSS.
Having prior experience with React and modern front-end tooling made the process straightforward.

That said, this exercise was still valuable as it reinforced the **best practices for setting up a project from
scratch**, including:

- Initializing a React project with Vite.
- Installing and configuring Tailwind CSS v4 using the official Vite plugin.
- Ensuring CSS imports and plugin configuration work correctly.

Even when familiar with the setup, going through the official documentation helped me **confirm the most current
recommended approach** and solidify my understanding of Vite + Tailwind integration.

### What happens if we modify state directly instead of using setState?

In React, you should always update state using the setter function like `setCount`, because changing the state variable
directly won’t make the component re-render, so the UI won’t update. Doing it directly can also lead to unexpected
behavior since React won’t track the change properly.
