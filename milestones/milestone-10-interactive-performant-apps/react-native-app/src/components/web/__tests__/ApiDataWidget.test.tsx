const React = require('react');
const { render, waitFor } = require('@testing-library/react-native');
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

    const { getByText, getByRole, findByText } = render(React.createElement(ApiDataWidget));

    expect(getByText(/loading/i)).toBeTruthy();

    expect(await findByText(/mocked api title/i)).toBeTruthy();
    expect(getByRole('header', { name: /api data/i })).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith('/todos/1');
  });

  test('shows an error message when the API call fails', async () => {
    httpClient.get.mockRejectedValue(new Error('Request failed'));

    const { findByRole, getByText } = render(React.createElement(ApiDataWidget));

    expect(await findByRole('alert')).toBeTruthy();
    await waitFor(() => {
      expect(getByText(/request failed/i)).toBeTruthy();
    });
  });
});
