# Onboarding Task - Static Analysis Checks in CI/CD

## Automated Checks

I set up a custom Markdown linting configuration for this repository, then added a spell checker to catch typos.
Finally, I created a GitHub Actions CI workflow that automatically runs both linting and spell checks on all pull
requests.

The image below shows errors triggered by the workflow when rules or spelling issues are violated.

<P align=center>
  <img width="370" alt="Image" src="https://github.com/user-attachments/assets/1fce5345-527e-4fa8-8492-ab2cffe12cdc" />
</p>

## Reflections

### What is the purpose of CI/CD?

CI/CDs are very useful in development as it automates building, testing, and deploying code. It also detects bus
and integration issues earlier so it allows developers to address this before merging onto main codebase. Overall,
CI/CDs help maintain consistent quality across all commits and branches.

### How does automating style checks improve project quality?

Automating style checks improves project quality by enforcing consistent code and documentation style. It also catches
little errors like spelling, formatting, and linting that might be overlooked during coding. Overall, it improves
readability and maintainability of the project.

### What are some challenges with enforcing checks in CI/CD?

I think one challenge could be the feeling of being blocked by strict rules if checks fail frequently. As someone who
is not used to this, I think it would take some time and practice to really manifest clean coding to ensure these
automated checks wont flag errors.

### How do CI/CD pipelines differ between small projects and large teams?

For smaller projects, they may require simpler pipelines, fewer steps, and faster feedback. For larger teams, it would
need stricter checks, approvals, and environment management. More automation would be required to prevent
integration issues and maintain consistency.
