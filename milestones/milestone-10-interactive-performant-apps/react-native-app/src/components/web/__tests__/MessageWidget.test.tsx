const React = require('react');
const { fireEvent, render } = require('@testing-library/react-native');
const MessageWidget = require('../MessageWidget');

describe('MessageWidget', () => {
  test('renders the message heading', () => {
    const { getByRole } = render(React.createElement(MessageWidget));

    expect(getByRole('header', { name: /hello from react native testing library/i })).toBeTruthy();
  });

  test('shows confirmation after pressing the button', () => {
    const { getByRole, getByText } = render(React.createElement(MessageWidget));

    fireEvent.press(getByRole('button', { name: /tap me/i }));

    expect(getByText(/button was tapped/i)).toBeTruthy();
  });
});
