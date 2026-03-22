# Repository Guidance

## Core Workflow

- Always use TDD for product code changes.
- Start by writing a failing unit test.
- Make the test pass with the smallest reasonable implementation.
- Refactor only after the test suite is green again.

## Quality Gates

- Add or update unit tests for every code change.
- `npm run lint` must pass after each set of changes.
- `npm run format:check` must pass after each set of changes.
- `npm run test` must pass before the work is complete.

## Project Structure

- Put route-level UI in `src/pages/`.
- Put reusable UI and logic in `src/features/`.
- Keep tests close to the code they verify when practical.
