# {Decision on how to implement toggling between edit and read mode}

* Status: {accept}
* Deciders: {Raymond Umbas} <!-- optional -->
* Date: {2022-11-10} <!-- optional -->

## Context and Problem Statement
- Read Mode: Rating and comment are displayed with plain text
- Edit Mode: Rating has a select element and comment has a textarea element
  - both are editable by the user
  
How should we implement changing between read and edit mode?

## Decision Drivers <!-- optional -->

- What is easy to implement?
- What is easier to interact with in the code?
  

## Considered Options

1) Not including edit elements in HTML but instead adding it in by changing innerHTML during runtime
2) Having the edit elements in HTML, but just toggling it's visibility

## Decision Outcome

Option 2

## Pros and Cons of the Options <!-- optional -->

- Option 1
  - Pros:
    - less code in base HTML
  - Cons:
    - difficult to interact with
    - complicated event handler for edit button (lots of code for changing innerHTML to include needed elements)
    - base HTML does not accurately show all interactable elements
    - if implemented incorrectly, lots of errors saying those elements don't exist

- Option 2
  - Pros:
    - easier to interact with in JS and CSS
    - cleaner eventHandler for edit button
    - base HTMl shows all elements that will be shown
  - Cons:
    - need to make sure it doesn't interfere with read mode elements