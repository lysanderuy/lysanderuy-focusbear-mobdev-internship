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

At first, the only test case I tried was to confirm if `1 + 2` really equals to `3`. It passed but when I tried making a
test case for this and passed an invalid input, `"hello"`, it still accepted the input and just concatenated it to 1
giving a result of `"1hello."` I then refactored the function to only accept numbers as an input and soon after,
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

---

## Refactoring Code

### Simplifying Complicated Code

This is a realistic example of an overly complicated code.

**Overly Complicated Version:**

```javascript
function processUsers(users) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i] !== null && users[i] !== undefined) {
      if (users[i].isActive === true) {
        if (users[i].age !== null && users[i].age !== undefined) {
          if (users[i].age > 18) {
            if (users[i].email !== null && users[i].email !== undefined) {
              let email = users[i].email;
              if (typeof email === "string") {
                let lower = "";
                for (let j = 0; j < email.length; j++) {
                  lower += email[j].toLowerCase();
                }
                result[result.length] = lower;
              }
            }
          }
        }
      }
    }
  }

  return result;
}
```

Improving the function to have no nested conditionals by using functional array methods, and removing unnecessary
null checks. Which makes it more readable and easier to test.

**Refactored Version:**

```javascript
function processUsers(users) {
  return users
    .filter(
      (user) =>
        user &&
        user.isActive &&
        user.age > 18 &&
        typeof user.email === "string",
    )
    .map((user) => user.email.toLowerCase());
}
```

### Reflections in Refactoring Code

#### What made the original code complex?

Firstly, the function contained deeply nested `if` statements which becomes hard to read. It also had too many
repeated null checks, manual implementation of built-in functionality (`toLowerCase`), and was difficult to
test and maintain.

#### How did refactoring improve it?

Refactoring definitely improved it by flattening the logic using `filter` and `map`. It reduced nesting and improved
readability. Overall, refactoring reduced the lines of code and lowered complexity while still maintaining the
same core functionality.

---

## Avoiding Code Duplication

### Applying DRY principle

This sample code below violates DRY because the same logic is duplicated three times in different places.

**With Unnecessary Repetition:**

```javascript
function sendWelcomeEmail(user) {
  if (user.role === "admin") {
    console.log("Welcome Admin " + user.name);
    console.log("Your account has been created.");
  }

  if (user.role === "editor") {
    console.log("Welcome Editor " + user.name);
    console.log("Your account has been created.");
  }

  if (user.role === "viewer") {
    console.log("Welcome Viewer " + user.name);
    console.log("Your account has been created.");
  }
}
```

We apply the DRY principle by making the entire function handle all roles dynamically. This way, we avoid duplicated
console logs, and everything is easier to maintain.

**Refactored Version (DRY):**

```javascript
function sendWelcomeEmail(user) {
  const role = user.role.charAt(0).toUpperCase() + user.role.slice(1);

  console.log(`Welcome ${role} ${user.name}`);
  console.log("Your account has been created.");
}
```

### Reflections in Avoiding Code Duplication

#### What were the issues with duplicated code?

The original code violated the DRY principle with its duplicated logic, making it harder to maintain. The duplicated
logic also introduces higher bug risks, poor scalability, and just makes the entire code unnecessarily long.

#### How did refactoring improve maintainability?

Refactoring the function to follow the DRY principle centralizes logic. It reduces duplication which in turn makes
the code shorter and cleaner. It also improves maintainability as the function itself is now easier to update or extend.

---

## Writing Small, Focused Functions

### Improving Long Functions

The function handles patient vitals, calculates a risk score, triggers alerts, and formats a summary all in one block.
While it works, its length makes it harder to test, maintain, and extend.

**Original Long Function:**

```javascript
// Function: Process patient vitals and generate summary
function processPatientVitals(patient) {
  if (!patient || !patient.vitals) {
    console.error("Invalid patient data");
    return null;
  }

  const { heartRate, bloodPressure, oxygenSaturation, temperature } =
    patient.vitals;

  // Check for abnormalities
  const alerts = [];
  if (heartRate < 60 || heartRate > 100)
    alerts.push(`Heart rate abnormal: ${heartRate}`);
  if (bloodPressure.systolic < 90 || bloodPressure.systolic > 140)
    alerts.push(`Systolic BP abnormal: ${bloodPressure.systolic}`);
  if (bloodPressure.diastolic < 60 || bloodPressure.diastolic > 90)
    alerts.push(`Diastolic BP abnormal: ${bloodPressure.diastolic}`);
  if (oxygenSaturation < 95)
    alerts.push(`Oxygen saturation low: ${oxygenSaturation}`);
  if (temperature < 36 || temperature > 37.5)
    alerts.push(`Temperature abnormal: ${temperature}`);

  // Simple risk scoring
  let riskScore = 0;
  if (heartRate > 100 || heartRate < 60) riskScore += 1;
  if (bloodPressure.systolic > 140 || bloodPressure.systolic < 90)
    riskScore += 1;
  if (oxygenSaturation < 92) riskScore += 2;
  if (temperature > 38) riskScore += 1;

  // Determine patient status
  const status =
    riskScore >= 3 ? "Critical" : riskScore === 2 ? "Warning" : "Stable";

  // Log result
  console.log(
    `Patient ${patient.id} status: ${status} (riskScore: ${riskScore})`,
  );
  if (alerts.length) console.warn("Alerts:", alerts.join(", "));

  // Return summary
  return {
    id: patient.id,
    status,
    riskScore,
    alerts,
    vitals: patient.vitals,
    timestamp: new Date().toISOString(),
  };
}
```

Breaking the function into smaller, single-purpose functions improves readability and makes testing each step easier.
Each piece—validation, alerting, scoring, and formatting—can now be updated independently without affecting the others.

**Refactored Version:**

```javascript
// Validate patient data
function validatePatient(patient) {
  if (!patient || !patient.vitals) {
    console.error("Invalid patient data");
    return false;
  }
  return true;
}

// Check for abnormal vitals
function getAlerts(vitals) {
  const alerts = [];
  if (vitals.heartRate < 60 || vitals.heartRate > 100)
    alerts.push(`Heart rate abnormal: ${vitals.heartRate}`);
  if (vitals.bloodPressure.systolic < 90 || vitals.bloodPressure.systolic > 140)
    alerts.push(`Systolic BP abnormal: ${vitals.bloodPressure.systolic}`);
  if (
    vitals.bloodPressure.diastolic < 60 ||
    vitals.bloodPressure.diastolic > 90
  )
    alerts.push(`Diastolic BP abnormal: ${vitals.bloodPressure.diastolic}`);
  if (vitals.oxygenSaturation < 95)
    alerts.push(`Oxygen saturation low: ${vitals.oxygenSaturation}`);
  if (vitals.temperature < 36 || vitals.temperature > 37.5)
    alerts.push(`Temperature abnormal: ${vitals.temperature}`);
  return alerts;
}

// Calculate risk score
function calculateRiskScore(vitals) {
  let score = 0;
  if (vitals.heartRate < 60 || vitals.heartRate > 100) score += 1;
  if (vitals.bloodPressure.systolic < 90 || vitals.bloodPressure.systolic > 140)
    score += 1;
  if (vitals.oxygenSaturation < 92) score += 2;
  if (vitals.temperature > 38) score += 1;
  return score;
}

// Determine patient status
function determineStatus(score) {
  return score >= 3 ? "Critical" : score === 2 ? "Warning" : "Stable";
}

// Format summary for output
function formatSummary(patient, status, score, alerts) {
  return {
    id: patient.id,
    status,
    riskScore: score,
    alerts,
    vitals: patient.vitals,
    timestamp: new Date().toISOString(),
  };
}

// Main function
function processPatientVitals(patient) {
  if (!validatePatient(patient)) return null;

  const vitals = patient.vitals;
  const alerts = getAlerts(vitals);
  const riskScore = calculateRiskScore(vitals);
  const status = determineStatus(riskScore);

  console.log(
    `Patient ${patient.id} status: ${status} (riskScore: ${riskScore})`,
  );
  if (alerts.length) console.warn("Alerts:", alerts.join(", "));

  return formatSummary(patient, status, riskScore, alerts);
}
```

### Reflections in Writing Small, Focused Functions

#### Why is breaking down functions beneficial?

Breaking down functions is beneficial because it mainly improves readability and understanding of the code. It also
makes testing each part easier, simplifies debugging and maintenance, and even encourages code reuse. Overall, it
reduces the risk of introducing errors when changing code.

#### How did refactoring improve the structure of the code?

Refactoring improved the structure of the code because each function now has a single, clear purpose. Because of this,
the main function now reads as a simple sequence of steps. Lastly, the overall flow is now more modular and
maintainable.
