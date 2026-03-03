const React = require('react');
const { fireEvent, render, screen } = require('@testing-library/react');
const MessageWidget = require('./MessageWidget');

describe('MessageWidget', () => {
  test('renders the message heading', () => {
    render(React.createElement(MessageWidget));
    expect(screen.getByRole('heading', { name: /hello from react testing library/i })).toBeInTheDocument();
  });

  test('shows confirmation after clicking the button', () => {
    render(React.createElement(MessageWidget));
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/button was clicked/i)).toBeInTheDocument();
  });
});

