# Onboarding Task - Handling Gestures and Animations in React Native

## Reflections

### What are the differences between Animated and react-native-reanimated?

Animated is the older built-in animation system in React Native, and most of its logic runs on the JavaScript thread.
That means if your JS thread is busy, animations can stutter or drop frames. Reanimated runs animations on the UI
thread and is built for complex interactions, so it stays smooth even when the app is doing heavier work in the
background.

### How does react-native-gesture-handler improve gesture performance?

React Native’s default touch system goes through the JS thread, which can feel delayed during heavy updates.
react-native-gesture-handler moves gesture recognition to the native side, so swipes, pans, and drags feel more
immediate and consistent. This makes complex gestures like swipe-to-delete or draggable cards much smoother and
more reliable.

### When would you use gestures instead of buttons in a UI?

Gestures are better when the interaction feels more natural as a movement, like swiping a card away or dragging
something across the screen. They reduce visual clutter because you don’t need extra buttons for every action.
Buttons are still better for important, explicit actions where you want clarity over speed or fluidity.

### Why is InteractionManager.runAfterInteractions necessary?

InteractionManager.runAfterInteractions lets you delay heavy JavaScript work until after animations or user
interactions are finished. Without it, expensive processing during a transition or gesture can make the UI feel
laggy. It helps keep the app responsive by prioritizing what the user is actively seeing and touching.
