# Onboarding Task - Pull Requests

## Pull Requests

### Creating a new branch

I created a new branch for Milestone 3. Learn Git. It will serve as the dedicated branch for resolving all issues under
the milestone. The figure below shows the list of all current branches, and the new created branch and that I am
currently on that specific branch.

<p align=center>
  <img width="250" alt="Image" src="https://github.com/user-attachments/assets/7ece190b-943f-49ec-a041-664641ab4c61" />
</p>

I have also created a new folder named **milestone/03-learn-git** added a file specific for issue #47: Pull Requests
which I will also be creating a Pull Request for later on.

<p align=center>
<img width="250" alt="Image" src="https://github.com/user-attachments/assets/1e650879-ffc2-4478-8f01-eff966ab68fc" />
</p>

### Reflections on Pull Requests

#### Why are PRs important in a team workflow

Pull Requests (PRs) are like merge requests that you create after adding a feature, fixing a bug, or making changes
on a separate branch to another branch. PRs serve as the central hub where team members review code, discuss necessary
matters, and collaborate with others. It allows members to examine proposed changes, give suggestions, and approve
or reject the request before it becomes a part of the main codebase. Pull Requests is a collaborative workflow that
strengthens and guides software development through collaboration and reviews.

#### What makes a well-structured PR

Generally, a short indicator of a well-structured PR is when someone is able to review it quickly and know exactly
where to check or what to look for. A well-structured PR must contain proper formatting with regards to title, headers,
and descriptions of the changes.

#### What did you learn from reviewing an open-source PR

Personally, I initially thought PRs were only done when a huge block of tasks or code changes happen. I was shocked to
see that even the smallest of changes like linting were documented into a PR. I learned the importance of creating
a well-structured PR because it makes reviewing a lot easier. Even as someone who is not a part of the projects
in the open-source PR examples, I can immediately understand what these requests include and why they were created.
PRs can also serve as a tool for learning, sharing knowledge, and improving the project together.

---

## Commit Messages

### My commit messages

Vague commit message.

<p align=center>
  <img width="700" alt="Image" src="https://github.com/user-attachments/assets/b08552a5-70aa-4324-b77c-d9ce18ea9648" />
</p>

- **Commit message:** "tweaked things"
- **Changes:**

  ```markdown
  # Focus Bear Mobile Dev Internship - Onboarding
  ```

An overly detailed commit message.

<p align=center>
  <img width="700"  alt="Image" src="https://github.com/user-attachments/assets/02dca6d4-3749-4011-a2ab-19fe221b077b" />
</p>

- **Commit message:** "Added full README content including repo structure, workflow steps, milestone overview table,
  and notes section. Detailed all milestone numbers (0–8) with descriptions, added folder tree code block for clarity,
  and explained how tasks link to GitHub issues and how branches are organized for onboarding.
  "
- **Changes:**
  - Added the full README content after the title, including:
    - Repo Structure section with folder tree
    - Workflow section explaining branches, issues, and PRs
    - Milestones Overview table (0–8) with descriptions
    - Notes section explaining task links and maintainability

A well-structured commit message.

<p align=center>
  <img width="700"  alt="Image" src="https://github.com/user-attachments/assets/4afc02f4-dc99-41b7-b824-19f74968ee42" />
</p>

- **Commit message:** "docs: complete onboarding README with workflow, milestones, and repo structure"
- **Changes:**
  - Minor refinements to formatting and readability:
    - Added emojis for clarity and engagement
    - Bolded key points for emphasis
    - Fixed small typos and adjusted headings
    - Ensured all links and notes are clear and consistent

### Reflections on Commit Messages

#### What makes a good commit message

A good commit message should give the readers a jist of what changes to expect in your commits. It should clearly
explain what changes were made, and if relevant, why they were made. A common structure followed by most companies
and development teams today starts with a type (feat: ,docs: , fix: , etc.) and a description in an imperative
mood ("add initial landing page UI").

#### How does a clear commit message help in team collaboration

Clear commit messages help your team understand whats happening at a glance. It is especially useful in code reviews,
discussions, debugging, and mergin branches. When every follows this practice of using consistent and well-structured
commit messages, it becomes sort of a reliable record of changes that allow everyone to work efficiently without
having to dig through code to figure out whats happening.

#### How can poor commit messages cause issues later

Poor commit messages like "fixed stuff" can create confusion and slow down development. It takes away the purpose of
commit messages being clear and concise that allows everyone to understand and predict incoming changes. Poor commit
messages make it harder for teammates to fully get what a commit does or why it was created. Over time, unclear
messages make the project history messy and difficult to maintain, making it harder for new members to catch up and
understand past changes as well.

---

## Git Bisect

### Creating a test scenario

I first created a new branch called `bisect-temp` and a new JS file (`test-bisect.js`)
so that my test changes would not affect other files.

```bash
git checkout -b bisect-temp
touch test-bisect.js
```

#### Commit scenarios

**1st Commit:** "feat: add calculateTotal function"

```javascript
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}
console.log(calculateTotal(100, 0.1)); // expected: 110
```

**2nd Commit:** "feat: add applyDiscount function"

```javascript
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

function applyDiscount(price, discountRate) {
  return price - price * discountRate;
}

console.log(calculateTotal(100, 0.1)); // 110
console.log(applyDiscount(100, 0.2)); // 80
```

**3rd Commit:** "refactor: change calculateTotal logic to wrong operation"

```javascript
function calculateTotal(price, taxRate) {
  return price - price * taxRate; // ❌ bug introduced
}

function applyDiscount(price, discountRate) {
  return price - price * discountRate;
}

console.log(calculateTotal(100, 0.1)); // now 90 instead of 110
console.log(applyDiscount(100, 0.2)); // 80
```

**4th Commit:** "feat: add addShipping function"

```javascript
function calculateTotal(price, taxRate) {
  return price - price * taxRate; // still broken
}

function applyDiscount(price, discountRate) {
  return price - price * discountRate;
}

function addShipping(price, shippingFee) {
  return price + shippingFee;
}

console.log(calculateTotal(100, 0.1)); // 90
console.log(applyDiscount(100, 0.2)); // 80
console.log(addShipping(100, 15)); // 115
```

#### Viewing all commits

```bash
git log --oneline
```

Output:

<p align=center>
  <img width="400" alt="Image" src="https://github.com/user-attachments/assets/2f7040b3-d586-4501-9fc5-2f49a2246985" />
</p>

#### Running Git Bisect

<p align=center>
  <img width="620" alt="Image" src="https://github.com/user-attachments/assets/53660c50-fead-4d1c-a0a7-1cde459bc96b" />
</p>

`Git bisect` successfully identified that **3rd commit** (refactor: change calculateTotal logic to wrong operation)
was the first commit that introduced the bug.

### Reflections on Git Bisect

#### What does git bisect do

`git bisect` is a tool in Git that helps you find the exact commit that introduced a bug. It works kind of like
a “binary search” on your commit history where you tell it a commit where everything worked (good) and a commit
where the bug appears (bad), and Git checks out commits in between so you can test them. Step by step, it narrows down
the culprit commit.

#### When would you use it in a real-world debugging situation

You’d use it when you know a bug exists but have no clue which commit caused it, especially if the project has lots
of commits. For example, if a feature suddenly broke after several weeks of development, instead of manually
checking dozens of commits, `git bisect` helps you pinpoint the exact one that caused the problem much faster.

#### How does it compare to manually reviewing commits

Manually going through commits is slow and error-prone, especially for large projects. You’d have to read through
code changes, guess where the bug might be, and test each commit. With `git bisect`, Git does the heavy lifting of
narrowing it down efficiently, so instead of checking 50 commits, you might only need 5–6 tests. It’s a huge time
saver and less frustrating.

---

## Advanced Git Commands

### Reflections in Advanced Git Commands

#### What does each command do

- **`git checkout main -- <file>`** - Restores a specific file from the main branch without affecting other files.
- **`git cherry-pick <commit>`** - Apply a specific commit from another branch without merging the whole branch.
- **`git log`** - View commit history and understand how changes evolved.
- **`git blame <file>`** - See who last modified each line in a file and when.

#### When would you use it in a real project

I would use **`git checkout main -- <file>`** for when I make changes in a file on a separate branch but accidentally
break a file or want the clean version from `main`. **`git cherry-pick <commit>`** is when I want to extract a certain
commit from another branch without having to merge the branches. There might be scenarios where each branch share
common problems and I want to extract and copy the fixes onto these branches so I use this command. **`git log`**
would be useful for listing all the commits that happened. This will be used all the time for understanding the
changes, when something broke, or why a decision was made. **`git blame <file>`** is very useful for debugging.
It allows us to check who last changed a line from a file or look at the commit related to that.

#### What surprised you while testing these commands

What surprise me was how easy to use these commands were. At first, they seem like commands I should never touch, but I
realized that they were precise and powerful and that they are very useful for my everyday work.

---

## Merge Conflicts
