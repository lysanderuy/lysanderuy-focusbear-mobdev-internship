# Onboarding Task - Writing Unit Tests for Clean Code

## Research Questions

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

---

## Reflections

### How do unit tests help keep code clean?

Unit tests help keep code clean because it helps you identify errors at every small step of the way. When coding,
especially in a larger codebase or team, a lot of minor details might be overlooked. Some error handling might be
missed, or other possible bugs could arise. With unit testing and unit testing frameworks like Jest, we are able to
really dig around a function, or a block of code to check what minor detail could be or could go wrong.

### What issues did you find while testing?

At first, the only test case I tried was to confirm if 1 + 2 really equals to 3. It passed but when I tried making a
test case for this and passed an invalid input, "hello", it still accepted the input and just concatenated it to 1
giving a result of "1hello." I then refactored the function to only accept numbers as an input and soon after,
the function passed both test cases.
