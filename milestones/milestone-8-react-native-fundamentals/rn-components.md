# Onboarding Task - Understanding React Native Components vs. React Components

## Reflections

### What are the key differences between <View> and <div>

`<div>` is a standard HTML element used in web development, while `<View>` is a core React Native component designed
specifically for mobile apps. A `<div>` renders in the browser using the DOM, but `<View>` renders to native UI
components on iOS and Android. Because of that, `<View>` uses React Native styling and layout rules instead of
regular CSS.

### How does StyleSheet.create() improve performance compared to inline styles

`StyleSheet.create()` helps by organizing styles into a single object that React Native can reference efficiently
instead of recreating style objects every render. Inline styles generate new objects each time, which can cause
unnecessary re-renders or slower updates. Using `StyleSheet.create()` keeps styles more consistent and slightly more
optimized under the hood.

### Why doesn’t React Native use className like React web

React Native doesn’t use `className` because it doesn’t work with CSS or the DOM like React for web does. Instead of
CSS classes, it uses JavaScript-based styling through the `style` prop. Since it renders native components rather
than HTML elements, traditional class-based styling wouldn’t apply.
