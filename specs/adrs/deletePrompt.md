# {Decision on what should be shown once the "delete" button is pressed }

* Status: {accept}
* Deciders: {Raymond Umbas (asked for a vote from all members in Slack channel)}} <!-- optional -->
* Date: {2022-11-10} <!-- optional -->

## Context and Problem Statement
- The delete button in the edit page deletes the viewed entry
- What should happen on screen when the delete button is pressed?

## Decision Drivers <!-- optional -->

- What is easy to implement?
- What is easier to interact with in the code?
- What is better for the user?
- What makes more sense in the flow of the site?

## Considered Options

1) Instantly delete entry, take back to calendar (previously used)
2) Display "Are you sure you want to delete prompt? Yes/No"
  - If "Yes" button is clicked
    - Instantly delete entry and take back to calendar
  - If "No" button is clicked
    - Return to edit page (in edit mode) without changing anyhing

## Decision Outcome

Option 2

## Pros and Cons of the Options <!-- optional -->

- Option 1
  - Pros:
    - easier to code
  - Cons:
    - User can accidently delete an entry (which cannot be recovered or remade)

- Option 2
  - Pros:
    - Better for the user
    - Makes more sense in relation to how a delete button is usually implemented
    - Still easy to code
  - Cons:
    - had to go back and add more elements and logic