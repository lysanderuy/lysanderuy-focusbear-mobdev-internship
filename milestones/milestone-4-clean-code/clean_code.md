# Onboarding Task - Clean Code

## Unit Testing

### Trying out Jest

I installed Jest as a dependency and also installed a VSCode extension.

The function below was create to allow for unit testing via Jest. This function was written on a temporary file
and on a temporary branch and will only be used for this example.

**Sample Function:**

```javascript
function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return undefined;
  }
  return a + b;
}

module.exports = sum;
```

**Unit Testing:**

Created a sample test case for the sum function. The Jest extension really makes testing a lot more convenient.

<p align=center>
  <img width="600" alt="Image" src="https://github.com/user-attachments/assets/57fb4f89-db55-415d-860b-d3711120d5a8" />
</p>

Ran the both test cases and the result shows no errors within the function.

<p align=center>
  <img width="450" alt="Image" src="https://github.com/user-attachments/assets/7f110fce-8c74-493a-a258-6b42fd5d27a0" />
</p>

### Reflections in Unit Testing

#### How do unit tests help keep code clean?

Unit tests help keep code clean because it helps you identify errors at every small step of the way. When coding,
especially in a larger codebase or team, a lot of minor details might be overlooked. Some error handling might be
missed, or other possible bugs could arise. With unit testing and unit testing frameworks like Jest, we are able to
really dig around a function, or a block of code to check what minor detail could be or could go wrong.

#### What issues did you find while testing?

At first, the only test case I tried was to confirm if 1 + 2 really equals to 3. It passed but when I tried making a
test case for this and passed an invalid input, "hello", it still accepted the input and just concatenated it to 1
giving a result of "1hello." I then refactored the function to only accept numbers as an input and soon after,
the function passed both test cases.

---

## Handling Errors & Edge Cases

### Improving Error Handling

This function below currently has no error handling or input validation.

**Sample Function:**

```javascript
function getAverage(numbers) {
  let total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}
```

It would fail given these following test scenarios:

```javascript
getAverage([]); // NaN (division by zero)
getAverage([1, 2, "3"]); // "123" due to string concatenation
getAverage(null); // TypeError: Cannot read property 'reduce' of null
```

**Refactored Function:**

```javascript
function getAverage(numbers) {
  // Guard clause: check if input exists and is an array
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an array of numbers");
  }

  // Guard clause: check for empty array
  if (numbers.length === 0) {
    throw new Error("Cannot compute average of an empty array");
  }

  // Guard clause: check that all elements are numbers
  for (const num of numbers) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      throw new TypeError("All elements in the array must be valid numbers");
    }
  }

  // Compute the average
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}
```

### Reflections in Error Handling & Edge Cases

#### What was the issue with the original code?

The original function lacked error handling or input validation. Invalid inputs like empty arrays, arrays with elements
that aren't numbers, or undefined parameters would cause division by zero, incorrect results, runtimes errors, or
even cause the function to fail. The function needed guard clauses and input validation to ensure that invalid inputs
are caught early and meaningful errors are thrown.

#### How does handling errors improve reliability?

Handling errors improve reliability by preventing crashes, and ensuring consistent behavior. It also simplifies and
helps with debugging, protects data integrity, and ultimately boosts user trust.

---

## Commenting & Documentation

### Improving Documentation

**Poorly Poorly Commented Code:**

```javascript
function process(data) {
  // loop
  for (let i = 0; i < data.length; i++) {
    // check
    if (data[i] > 100) {
      // fix it
      data[i] = 100;
    }
  }
  return data; // return data
}
```

**Improved Version with Useful Comments:**

```javascript
/**
 * Caps all numeric values in the array at a maximum of 100.
 *
 * This function ensures that no value exceeds the system's
 * upper threshold (e.g., maximum allowed score or percentage).
 *
 * @param {number[]} data - Array of numeric values to normalize.
 * @returns {number[]} The modified array with values capped at 100.
 */
function process(data) {
  // Iterate through each value to enforce the maximum limit
  for (let i = 0; i < data.length; i++) {
    // Clamp values above 100 to prevent overflow or invalid scores
    if (data[i] > 100) {
      data[i] = 100;
    }
  }

  return data;
}
```

### Reflections in Commenting & Documentation

#### When should you add comments?

Comments or documentation should be added when the intent isn't clear. It should be added to explain why something is
done a certain way, or to explain complex logics. It is also helpful to add documentation for public APIs and shared
functions to make it readable and easily understandable by many. Overall, documentations provide clarity, and improved
readability.

#### When should you avoid comments and instead improve the code?

You should avoid comments and improve the code instead when the comments just repeat what the code says, or
when variable/function names are unclear, so you just rename them in the code instead. It should also be avoided
when the function is doing too much or when the logic itself is confusing. Generally, when the code can be made
self-explanatory by name changes or a little refactoring, then comments/documentation aren't really needed.
