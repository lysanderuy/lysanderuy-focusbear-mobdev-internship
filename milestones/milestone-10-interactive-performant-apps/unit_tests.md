# Onboarding Task - Jest

## Introduction to Jest

### Trying Out Jest

I set up Jest directly inside `milestone-10-interactive-performant-apps` using plain JavaScript
files (no React app scaffold).

What was done:

1. Created `package.json` with a `test` script (`jest`)
2. Installed Jest as a dev dependency
3. Added `sum.js` for the sample function
4. Added `sum.test.js` with two test cases
5. Ran the tests

**Sample Function (`sum.js`):**

```javascript
function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return undefined;
  }
  return a + b;
}

module.exports = sum;
```

**Unit Tests (`sum.test.js`):**

```javascript
const sum = require('./sum');

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('returns undefined for non-numeric input', () => {
    expect(sum('a', 3)).toBeUndefined();
  });
});
```

**Command used:**

```bash
cd react-native-app && npm test -- --runInBand
```

**Result:**

<p align=center>
  <img width="300" alt="Image" src="https://github.com/user-attachments/assets/36daa0d1-8bec-4d96-b63d-ba6f8079a23a" />
</p>

### Reflections in Introduction to Jest

#### Why is automated testing important in software development

Automated testing helps catch bugs early before they become bigger problems in production. It gives me confidence to
refactor or improve code because I know the tests will tell me if I broke something. It also saves time long-term since
I don’t have to manually test the same functionality over and over again.

#### What did you find challenging when writing your first Jest test

At first, understanding how Jest structures tests and how `expect` works was a bit confusing. I also had to figure out
how to properly export and import the function so the test could recognize it. Once I saw the passing result, though,
it made the setup process feel worth it.

---

## Testing React with Jest

### Testing React Components with Jest

I added React component testing on top of the existing Jest setup using:

- `react`
- `react-dom`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `jest-environment-jsdom`

I also configured Jest to use `jsdom` and load `jest.setup.js`:

```javascript
{
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"]
  }
}
```

`jest.setup.js`:

```javascript
require('@testing-library/jest-dom');
```

**React component (`MessageWidget.js`):**

```javascript
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
```

**Component tests (`MessageWidget.test.js`):**

```javascript
const React = require('react');
const { fireEvent, render, screen } = require('@testing-library/react');
const MessageWidget = require('./MessageWidget');

describe('MessageWidget', () => {
  test('renders the message heading', () => {
    render(React.createElement(MessageWidget));
    expect(
      screen.getByRole('heading', { name: /hello from react testing library/i })
    ).toBeInTheDocument();
  });

  test('shows confirmation after clicking the button', () => {
    render(React.createElement(MessageWidget));
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/button was clicked/i)).toBeInTheDocument();
  });
});
```

**Command used:**

```bash
cd react-native-app && npm test -- --runInBand
```

**Result:**

<p align=center>
  <img width="300" alt="Image" src="https://github.com/user-attachments/assets/e92620d0-2fd4-4999-a0d1-b11a0806514c" />
</p>

### Reflections in Testing React with Jest

#### What are the benefits of using React Testing Library instead of testing implementation details

What I like about React Testing Library is that it focuses on how the user actually experiences the app, not how
the code is written internally. Instead of testing state variables or private methods, I test what’s visible on the
screen and how it responds to actions. That makes the tests more stable, especially when I refactor the internal logic
but keep the UI behavior the same.

#### What challenges did you encounter when simulating user interaction

The main challenge was setting up the right environment for user interaction tests. My click test initially
failed until I installed and configured `jest-environment-jsdom`. After that, using `getByRole` and `fireEvent.click`
made the interaction test straightforward and reliable.

---

## Mocking API Calls

### Testing a React Component with Mocked API Data

For this part, I created `ApiDataWidget.js`, a React component that calls an API on mount and shows three UI states:
loading, success, and error. I then wrote `ApiDataWidget.test.js` where I mocked `global.fetch` so the test does not
depend on a real network call. The test verifies that "Loading..." appears first, then checks that the mocked API title
is rendered and confirms `fetch` was called once with the expected URL.

**Command used:**

```bash
cd react-native-app && npm test -- --runInBand src/components/web/__tests__/ApiDataWidget.test.tsx
```

**Result:**

<p align=center>
  <img width="300" alt="Image" src="https://github.com/user-attachments/assets/c29a04b4-39d7-4345-ae54-605a1a73d727" />
</p>

### Reflections

#### Why is it important to mock API calls in tests

Mocking API calls keeps my tests stable because they are no longer tied to internet speed or external service uptime.
It also makes failures easier to debug since I can control exactly what response the component receives. I like that it
lets me focus on validating my UI behavior instead of testing someone else’s API reliability.

#### What are some common pitfalls when testing asynchronous code

One common mistake is asserting too early before the async state update has finished, which causes flaky failures.
Another issue is forgetting to return or await async helpers, so tests pass or fail for the wrong reason. I also learned
that not resetting mocks between tests can leak behavior and make later test results confusing.

---

## Redux Testing

### Testing Output

I added Redux-focused tests in the milestone 10 React Native app:

- `react-native-app/src/features/counter/__tests__/counterSlice.test.ts`
- `react-native-app/src/features/counter/counterSlice.ts`

What these tests validate:

1. The reducer updates state correctly for a sync action (`addByAmount`).
2. The async Redux action (`fetchGreeting`) dispatches pending/fulfilled flow and updates state.

**Command used:**

```bash
cd react-native-app && npm test -- --runInBand
```

**Result summary:**

<p align=center>
  <img width="300" alt="Image" src="https://github.com/user-attachments/assets/d40d8705-1c3b-4c24-885a-3344150842a3" />
</p>

### Reflections in Redux Testing

#### What was the most challenging part of testing Redux

The trickiest part was testing the async action flow in a way that stays simple and deterministic. Instead of relying on
a full Redux store, I used a small mocked `dispatch` and manually reduced each dispatched action into state. That made
the test focused and reliable, but required careful setup to make sure the assertions matched the real action sequence.

#### How do Redux tests differ from React component tests

Redux tests focus on state transitions and action flow: given an action, does the reducer return the expected state, and
does async logic dispatch the right actions in order. React component tests focus on rendered UI and user behavior:
what appears on screen and how it changes after interactions. In short, Redux tests validate state logic, while React
component tests validate user-visible behavior.
