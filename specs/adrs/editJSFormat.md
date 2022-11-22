# {Decision on how to edit page JS file should be formatted}

* Status: {accept}
* Deciders: {Raymond Umbas} <!-- optional -->
* Date: {2022-11-22} <!-- optional -->

## Context and Problem Statement
- The edit page javascript code is mainly a bunch of event handlers for each button
- How should all of the code for all of the event handlers be formatted?

## Decision Drivers <!-- optional -->

- What is easy to implement?
- What is easier to interact with in the code?
  

## Considered Options

1) Define functions within the event handler (previously used method)
```javascript
editButton.addEventListener("click", function(){});
```
2) Having a separate definition for the function outside of the eventHandler
```javascript
editButton.addEventListener("click", editMode);
function editMode(){
}
```

## Decision Outcome

Option 2

## Pros and Cons of the Options <!-- optional -->

- Option 1
  - Pros:
    - gurantees that the event handler will successfully execute code
  - Cons:
    - not able to isolate function from event handler
    - does not look as clean

- Option 2
  - Pros:
    - cleaner code
    - separate functions can be used for testing
  - Cons:
    - needed to go back and change everything