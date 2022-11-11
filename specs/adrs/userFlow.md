# {Decision on general user flow for prompt}

* Status: {accept}
* Deciders: {all team members} <!-- optional -->
* Date: {2022-11-03} <!-- optional -->

## Context and Problem Statement

Decide how users submit their daily feelings, and how many times.

## Decision Drivers <!-- optional -->

* Have the simplest flow for our project

## Considered Options

* hello-page -> prompt-page -> finish-page
  * "let's go" in hello-page takes to the prompt-page
  * must complete feeling choice in prompt page; comment is optional to click "finish" button
  * "finish" button will take to the finish-page
  * "your entry" button in finish-page will take to calendar page

* Have two separate screens for the everyday prompt: one for the feeling rating, one for the comment
* Upon already submitting their first answer, users can hit "let's go" again and still go to the prompt page

## Decision Outcome

### General flow:

* hello-page -> prompt-page -> finish-page
  * "let's go" in hello-page takes to the prompt-page
  * must complete feeling choice in prompt page; comment is optional to click "finish" button
  * "finish" button will take to the finish-page
  * "your entry" button in finish-page will take to calendar page

Big decisions: only have one screen for the prompt page; user can only answer the form once in a day, but may edit the entry in the calendar.

## Pros and Cons of the Options <!-- optional -->

### Pro: {two screens}
* will be less visually cluttered

<!-- markdownlint-disable-file MD013 -->