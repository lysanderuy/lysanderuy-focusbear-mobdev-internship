# Onboarding Task - React Native Stylesheets vs CSS-in-JS

## Reflections

### Why does React Native use camelCase instead of traditional CSS properties

React Native styles are written in JavaScript, so camelCase follows normal JS object conventions instead of CSS syntax.
Since you’re defining styles as objects, properties like backgroundColor fit naturally with how JS works. It keeps
everything consistent inside the JavaScript ecosystem instead of mixing CSS string rules with JS code.

### What are the benefits of using StyleSheet.create() over inline styles

`StyleSheet.create()` keeps styles organized and reusable, especially as components grow. It avoids recreating new
style objects on every render, which helps with performance and cleaner re-renders. It also catches invalid style
properties early during development, which makes debugging easier.

### How would you handle different screen sizes in React Native

I usually rely on `useWindowDimensions()` to adjust layout or font sizes based on screen width. Flexbox does most of
the heavy lifting, so designing flexible layouts first is important before adding breakpoints. For bigger changes like
tablet layouts, I conditionally apply different styles depending on width thresholds.
