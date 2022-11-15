# {Decision on edit functions}

* Status: {accept}
* Deciders: {all team members} <!-- optional -->
* Date: {2022-11-01} <!-- optional -->

## Context and Problem Statement

We were discussing what are the essential components for the edit page and its functionality.

## Decision Drivers <!-- optional -->

* Easy to implement
* Easy to use
* Include basic neccessities
* Project Criteria (edit/delete)

## Considered Options

* navbar (same as other pages)
  * click on logo to go to **hello** page
  * date
  * link to **calendar** page

* edit page
  * selected date
  * rating
  * comment
  * read mode:
    * edit button
    * "x" button
  * edit mode:
    * delete button
    * update button

* "x" button
  * goes back to calendar page
  
* edit button
  * makes rating/comment editable
  * displays the delete button
  * displays the update button


* "editted" field
  * keep track if entry has been editted
  * default = false
  * once a change has been made = true

* delete button
  * allows user to delete existing entries
  * Returns back to calendar
  * change "done" field to false
  
* update button
  * makes rating/comment not editable
  * hide update button once clicked
  * hides delete button
  * updates **localStorage** with editted values
  * makes "editted" field true

* flow
  * from **calendar page** if a date with an entry is clicked, go to **edit** page
  * Click **delete** button to delete and go back
  * Click **edit** to change to edit mode
  * Click **update** to change to read mode/update values
  
## Decision Outcome

All of the above.
Making it a pop up from calendar page TBD

## Pros and Cons of the Options <!-- optional -->

### Pros:
* easy to use and straight to the point
* easy transitions to from and to other pages


### Cons:
* currently is not a pop up just a separate page
* currently has unlimited character comment box
    which is a lot of date to store