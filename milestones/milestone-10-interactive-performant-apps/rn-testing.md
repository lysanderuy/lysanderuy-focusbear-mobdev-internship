# Onboarding Task - Writing Unit and Integration Tests for React Native

## Building a Practical React Native Testing Workflow

For this task, I set up and verified Jest testing for the milestone 10 React Native app using Expo-compatible tooling
and React Native Testing Library.

What I implemented:

1. Updated Jest configuration in `react-native-app/package.json` to use `"preset": "jest-expo"`.
2. Added required dev dependencies:
   - `jest-expo`
   - `@testing-library/react-native`
   - `react-test-renderer`
3. Updated `react-native-app/jest.setup.ts` for React Native test setup:
   - `require('react-native-gesture-handler/jestSetup')`
   - `jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))`
4. Reworked `MessageWidget` into React Native primitives (`View`, `Text`, `Pressable`) and wrote component interaction
  tests with React Native Testing Library.
5. Reworked `ApiDataWidget` into React Native primitives and wrote mocked API tests by mocking `httpClient.get`.
6. Added API test coverage for both success and error UI states.

Files updated:

- `react-native-app/package.json`
- `react-native-app/package-lock.json`
- `react-native-app/jest.setup.ts`
- `react-native-app/src/components/web/MessageWidget.tsx`
- `react-native-app/src/components/web/ApiDataWidget.tsx`
- `react-native-app/src/components/web/__tests__/MessageWidget.test.tsx`
- `react-native-app/src/components/web/__tests__/ApiDataWidget.test.tsx`

Command used to verify:

```bash
cd react-native-app && npm test -- --runInBand
```

Result summary:

- 4 test suites passed
- 8 tests passed
- Includes simple component interaction testing and mocked API data-fetching behavior

## Reflections

### Why is testing important in React Native development

Testing gives me confidence that UI behavior still works when I refactor code or upgrade dependencies. In React Native,
that matters a lot because a small logic change can break user flows across multiple platforms. Good tests also reduce
manual regression checks and speed up iteration.

### How do you mock API calls in tests

I mock the API client module directly, then control its responses with `mockResolvedValue` or
`mockRejectedValue`. This lets the test focus on loading, success, and error UI states instead of real network
conditions. It also makes tests deterministic and easier to debug when failures happen.

### What’s the difference between unit and integration tests

Unit tests validate isolated logic, like a reducer or utility function, with minimal dependencies. Integration tests
validate multiple parts working together, like a component rendering data after an async API call. In practice, I use
unit tests for fast logic checks and integration tests to verify user-visible behavior.
