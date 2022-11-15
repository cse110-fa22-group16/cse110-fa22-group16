# {Decision on calendar function}

* Status: {accept}
* Deciders: {all team members} <!-- optional -->
* Date: {2022-11-08} <!-- optional -->

## Context and Problem Statement

We were discussing what are the essential components for the calendar page and its functionality.

## Decision Drivers <!-- optional -->

* Easy to implement
* Display clearly
* User friendly
* Only in HTML or JS
* Less is more

## Considered Options

* dropdown data selector (user select dates)
  * one option box, not two, easy to implement, easy to select
  * select month & year in the box
  * start at 2022, no need for previous years

* calendar grid display
  * 7*7: 1*7 for weekday names, 6*7 for actual month date
  * app descriptor
  * "let's go" button

## Decision Outcome

All of the above.

## Pros and Cons of the Options <!-- optional -->

### Cons: {unlimited character comment box}
* potentially a lot of data to store

<!-- markdownlint-disable-file MD013 -->
