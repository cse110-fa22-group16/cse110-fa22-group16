# {Decision on calendar and edit link}

* Status: {accept}
* Deciders: {all team members} <!-- optional -->
* Date: {2022-11-17} <!-- optional -->

## Context and Problem Statement

We were discussing the functionality that can lead to edit-entry page

## Decision Drivers <!-- optional -->

* Easy to implement
* Display clearly
* User friendly
* Less is more

## Considered Options

* Define a new variable in the Local Storage named `currentState` that trace the selected date
  * simple and consistent
  * avoid bugs
  * this variable can direct to the month when we go back to the calendar from edit page

## Decision Outcome

![image](https://user-images.githubusercontent.com/57332517/202578490-6c93fa58-94cc-46b0-b848-406177110766.png)

All of the above.
Implementation in edit and calendar

## Pros and Cons of the Options <!-- optional -->

### Pros:
* easy to link with **edit** page
* easy to merge up with other branches
* ...

### Cons:
* potentially a little hard to implement
* ...

<!-- markdownlint-disable-file MD013 -->
