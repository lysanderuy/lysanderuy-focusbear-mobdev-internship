# Onboarding Task - Handling API Calls in React Native with Axios

## Trying out Axios

For this task, I implemented API calls using Axios in the milestone 10 React Native app and added retry handling for
network failures using Axios-Retry.

What I implemented:

1. Created a reusable HTTP client at `react-native-app/src/api/httpClient.js`.
2. Configured `axios.create` with:
   - Base URL: `https://jsonplaceholder.typicode.com`
   - Timeout: `8000ms`
3. Applied Axios-Retry to that client with:
   - `retries: 3`
   - `retryCondition: axiosRetry.isNetworkError(error)` (network failures only)
   - `retryDelay: axiosRetry.exponentialDelay`
4. Updated `ApiDataWidget` to use `httpClient.get('/todos/1')` instead of `fetch`.
5. Updated the unit test to mock the Axios client (`httpClient.get`) instead of mocking `global.fetch`.

**Files updated:**

- `react-native-app/src/api/httpClient.js`
- `react-native-app/src/components/web/ApiDataWidget.tsx`
- `react-native-app/src/components/web/__tests__/ApiDataWidget.test.tsx`

**Command used to verify:**

```bash
cd react-native-app && npm test -- --runInBand src/components/web/__tests__/ApiDataWidget.test.tsx
```

**Result:**

The test passed and verified the expected behavior: loading state first, then successful rendering of mocked API data,
with the Axios client called exactly once using the expected endpoint.

## Reflections

### Why is Axios preferred over fetch in some cases

Axios is often preferred because it provides a cleaner API with built-in JSON parsing and consistent error handling.
It also supports request/response interceptors, which makes authentication, logging, and global error handling easier
to manage. In React Native projects, this reduces repeated boilerplate and keeps API code more maintainable.

### How does Axios-Retry improve network reliability

Axios-Retry automatically retries failed requests when issues like temporary network drops occur. This improves
reliability by giving transient failures another chance without requiring manual retry logic in every API call.
With strategies like exponential backoff, it also avoids hammering the server during unstable connections.

### How would you handle API failures gracefully in a React Native app

I would show clear user-friendly error states, such as a message with a retry button, instead of leaving blank or stuck
screens. I would log technical details for debugging while displaying safe, simple messages to users. I would also keep
loading and cached states managed properly so the app remains responsive even when requests fail.
