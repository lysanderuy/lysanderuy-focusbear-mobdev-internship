# Onboarding Task - Code Smells

## Research Questions

### Types of Code Smells

#### 1. Magic Numbers & Strings

**Smelly Code:**

```javascript
function calculateDiscount(price) {
  return price * 0.8; // 20% discount
}
```

**Refactored Code:**

```javascript
const DISCOUNT_RATE = 0.2;

function calculateDiscount(price) {
  return price * (1 - DISCOUNT_RATE);
}
```

#### 2. Long Functions

**Smelly Code:**

```javascript
function processOrder(order) {
  console.log("Validating order");
  order.forEach((item) => console.log(`Checking stock for ${item}`));
  console.log("Calculating total");
  let total = order.reduce((sum, item) => sum + item.price, 0);
  console.log("Processing payment");
  console.log("Sending confirmation email");
}
```

**Refactored Code:**

```javascript
function validateOrder(order) {
  order.forEach((item) => console.log(`Checking stock for ${item}`));
}

function calculateTotal(order) {
  return order.reduce((sum, item) => sum + item.price, 0);
}

function processOrder(order) {
  validateOrder(order);
  const total = calculateTotal(order);
  console.log("Processing payment");
  console.log("Sending confirmation email");
}
```

#### 3. Duplicate Code

**Smelly Code:**

```javascript
function sendEmailToAdmin(msg) {
  console.log(`Sending email to admin: ${msg}`);
}

function sendEmailToUser(msg) {
  console.log(`Sending email to user: ${msg}`);
}
```

**Refactored Code:**

```javascript
function sendEmail(recipient, msg) {
  console.log(`Sending email to ${recipient}: ${msg}`);
}

sendEmail("admin", "Hello");
sendEmail("user", "Hello");
```

#### 4. Large Classes (God Objects)

**Smelly Code:**

```javascript
class AppManager {
  constructor() {
    this.users = [];
    this.orders = [];
  }
  addUser(user) {
    this.users.push(user);
  }
  addOrder(order) {
    this.orders.push(order);
  }
  sendEmail(msg) {
    console.log(msg);
  }
}
```

**Refactored Code:**

```javascript
class UserManager {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
}

class OrderManager {
  constructor() {
    this.orders = [];
  }
  addOrder(order) {
    this.orders.push(order);
  }
}

class EmailService {
  static sendEmail(msg) {
    console.log(msg);
  }
}
```

#### 5. Deeply Nested Conditionals

**Smelly Code:**

```javascript
function getStatus(user) {
  if (user.isActive) {
    if (user.isVerified) {
      if (user.isAdmin) {
        return "Admin";
      } else {
        return "User";
      }
    } else {
      return "Unverified";
    }
  } else {
    return "Inactive";
  }
}
```

**Refactored Code:**

```javascript
function getStatus(user) {
  if (!user.isActive) return "Inactive";
  if (!user.isVerified) return "Unverified";
  return user.isAdmin ? "Admin" : "User";
}
```

#### 6. Commented-Out Code

**Smelly Code:**

```javascript
function calculate(a, b) {
  // return a + b;
  return a * b;
}
```

**Refactored Code:**

```javascript
function calculate(a, b) {
  return a * b;
}
```

#### 7. Inconsistent Naming

**Smelly Code:**

```javascript
function calc(x, y) {
  let z = x + y;
  return z;
}
```

**Refactored Code:**

```javascript
function calculateSum(firstNumber, secondNumber) {
  const total = firstNumber + secondNumber;
  return total;
}
```

---

## Reflections

### What code smells did you find in your code

- Hardcoded values (magic numbers/strings) instead of constants
- Functions doing too much (long functions)
- Repeated logic instead of reusable functions (duplicate code)
- Classes handling multiple responsibilities (large/god classes)
- Nested if/else chains making flow hard to follow (deeply nested conditionals)
- Commented-out code cluttering the file
- Unclear or inconsistent variable and function names

### How did refactoring improve the readability and maintainability of the code

- Replaced magic numbers/strings with named constants for clarity
- Split long functions into smaller, focused functions
- Consolidated repeated code into reusable functions
- Broke large classes into single-responsibility classes
- Simplified nested conditionals for easier logic understanding
- Removed commented-out code to reduce clutter
- Renamed variables/functions for clarity and consistency

### How can avoiding code smells make future debugging easier

Avoiding code smells makes it easier to locate and fix minor issues that may be in your code because it is now
organized into small, focused classes or functions. It also reduces the risk of introducing bugs from duplicated
logic. Writing clean code also improves overall readability for new developers in the future or teammates who will
review your code. Overall, I think avoiding code smells can make debugging easier by making everything from variable
names to functions to classes in your code immediately clear from the start.
