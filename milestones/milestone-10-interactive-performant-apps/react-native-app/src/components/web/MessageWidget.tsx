const React = require('react');

function MessageWidget() {
  const [clicked, setClicked] = React.useState(false);

  return React.createElement(
    'section',
    null,
    React.createElement('h1', null, 'Hello from React Testing Library'),
    React.createElement(
      'button',
      { type: 'button', onClick: () => setClicked(true) },
      'Click me'
    ),
    clicked ? React.createElement('p', null, 'Button was clicked') : null
  );
}

module.exports = MessageWidget;

