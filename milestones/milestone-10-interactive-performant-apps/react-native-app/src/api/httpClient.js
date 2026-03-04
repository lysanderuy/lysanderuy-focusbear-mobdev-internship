const axios = require('axios');
const axiosRetry = require('axios-retry').default;

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 8000
});

axiosRetry(httpClient, {
  retries: 3,
  retryCondition: error => axiosRetry.isNetworkError(error),
  retryDelay: axiosRetry.exponentialDelay
});

module.exports = httpClient;
