const React = require('react');
const { render, screen } = require('@testing-library/react');
const ApiDataWidget = require('../ApiDataWidget');

describe('ApiDataWidget', () => {
  test('fetches and displays data from the API', async () => {
    const mockJson = jest.fn().mockResolvedValue({ title: 'Mocked API Title' });
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: mockJson
    });

    render(React.createElement(ApiDataWidget));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findByText(/mocked api title/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /api data/i })).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  });
});
