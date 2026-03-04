const React = require('react');
const { render, screen } = require('@testing-library/react');
const ApiDataWidget = require('../ApiDataWidget');
const httpClient = require('../../../api/httpClient');

jest.mock('../../../api/httpClient', () => ({
  get: jest.fn()
}));

describe('ApiDataWidget', () => {
  test('fetches and displays data from the API', async () => {
    httpClient.get.mockResolvedValue({
      data: { title: 'Mocked API Title' }
    });

    render(React.createElement(ApiDataWidget));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(await screen.findByText(/mocked api title/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /api data/i })).toBeInTheDocument();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith('/todos/1');
  });
});
