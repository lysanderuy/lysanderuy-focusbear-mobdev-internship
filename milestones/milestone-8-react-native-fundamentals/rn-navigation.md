# Navigation in React Native using React Navigation

## Reflections

### What are the key differences between stack, tab, and drawer navigation

Stack is like pages on top of each other: you “push” screens and go back through history. Tabs are your main sections
that stay visible so users can jump around fast (Dashboard, Bookings, Settings). Drawer is a hidden side menu for extra
sections that don’t need to be front-and-center, usually opened with a swipe or hamburger icon.

### How does React Navigation handle screen transitions

When you navigate, it updates an internal navigation state (which route is active, what’s in the stack) then renders
the new screen. The transition animation comes from the navigator type (stack does slide/push by default, tabs
typically switch, drawer slides in) and can be customized per screen. Under the hood it’s basically
“dispatch an action → router calculates next state → navigator animates to that state.”

### How would you implement deep linking in a React Native app

With Expo Router, deep linking is mostly file-based, meaning your folder structure already defines the URL paths. You
configure an app scheme in `app.json`, and links like `myapp://customers/123` automatically map
to `app/customers/[id].tsx`. Inside that screen, you use `useLocalSearchParams()` to access the dynamic
values from the link.
