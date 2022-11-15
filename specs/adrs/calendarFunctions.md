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
  * 7x7: 1x7 for weekday names, 6x7 for actual month date
  * should be fit by window size
  * (may offer stats page if available)

* editable date in the grid to edit entries
  * only can edit the date if you did the entry: no clickable if this date is blank
  * clickable date link to **edit** page
  * be simple and consise

## Decision Outcome

All of the above.
Stats page TBD

## Pros and Cons of the Options <!-- optional -->

### Pros:
* not hard to link with **edit** page
* easy to merge up with other branches
* ...

### Cons:
* potentially a lot of data to store
* data in the grid might be messy
* ...

<!-- markdownlint-disable-file MD013 -->
