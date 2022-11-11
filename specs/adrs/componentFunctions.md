# {Decision on what components will be included for prompt user flow}

* Status: {accept}
* Deciders: {all team members} <!-- optional -->
* Date: {2022-11-03} <!-- optional -->

## Context and Problem Statement

We were discussing what are the essential components for the pages of the prompt flow.

## Decision Drivers <!-- optional -->

* Easy to implement
* Less is more

## Considered Options

* navbar (for all pages)
  * logo
  * dynamically changing date
  * "my calendar" link

* hello-page
  * logo
  * app descriptor
  * "let's go" button

* prompt-page
  * prompt
  * choices of feelings
  * comment box with unlimited character count
  * "finish" button

* finish-page
  * farewell message
  * "your entry" button

## Decision Outcome

All of the above.

## Pros and Cons of the Options <!-- optional -->

### Cons: {unlimited character comment box}
* potentially a lot of data to store

<!-- markdownlint-disable-file MD013 -->