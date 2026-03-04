const React = require('react');
const { Pressable, Text, View } = require('react-native');

function MessageWidget() {
  const [pressed, setPressed] = React.useState(false);

  return React.createElement(
    View,
    null,
    React.createElement(Text, { accessibilityRole: 'header' }, 'Hello from React Native Testing Library'),
    React.createElement(
      Pressable,
      {
        accessibilityRole: 'button',
        onPress: () => setPressed(true)
      },
      React.createElement(Text, null, 'Tap me')
    ),
    pressed ? React.createElement(Text, null, 'Button was tapped') : null
  );
}

module.exports = MessageWidget;
