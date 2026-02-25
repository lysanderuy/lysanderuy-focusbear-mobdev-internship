# Onboarding Task - Redux

## Reflections

### When should you use Redux instead of useState

You should use Redux instead of useState when the state needs to be shared across multiple components or across
different pages in your application. Redux is especially helpful in larger apps where maintaining a single source of
truth makes state updates more predictable, consistent, and easier to manage.

### What are the benefits of using selectors instead of directly accessing state

Using selectors instead of directly accessing state improves code maintainability by centralizing how specific pieces
of state are retrieved, so if the state structure changes, you only need to update the selector rather than every
component. Selectors also promote reusability and cleaner components by abstracting state logic out of the UI layer,
making components easier to read and test.
