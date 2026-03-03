# Onboarding Task - Introduction to Unit Testing with Jest

## Trying Out Jest

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
npm test -- --runInBand
```

**Result:**

<p align=center>
  <img width="300" alt="Image" src="https://github.com/user-attachments/assets/36daa0d1-8bec-4d96-b63d-ba6f8079a23a" />
</p>

## Reflections

### Why is automated testing important in software development

Automated testing helps catch bugs early before they become bigger problems in production. It gives me confidence to
refactor or improve code because I know the tests will tell me if I broke something. It also saves time long-term since
I don’t have to manually test the same functionality over and over again.

### What did you find challenging when writing your first Jest test

At first, understanding how Jest structures tests and how `expect` works was a bit confusing. I also had to figure out
how to properly export and import the function so the test could recognize it. Once I saw the passing result, though,
it made the setup process feel worth it.
