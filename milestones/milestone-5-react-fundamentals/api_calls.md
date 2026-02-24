# Onboarding Task - Making API Calls with Axios

## Reflections

### Why is it useful to create a reusable Axios instance?

Creating a reusable Axios instance provides a centralized base URL, headers, and timeout settings. It avoid repeating
configuration in every request, makes maintenance and updates easier, and ultimately ensures consistency across
the app.

### How does intercepting requests help with authentication?

Adding interceptors provides a centralized error handling for auth failures as intercepting requests automatically
attaches tokens to headers. It also prevents missing or invalid authentication on requests.

### What happens if an API request times out, and how can you handle it?

The request is aborted if it takes too long, because Axios throws a timeout error. I can handle it by catching the
error and showing a message or retry. This way, we can prevent the app from hanging or freezing.
