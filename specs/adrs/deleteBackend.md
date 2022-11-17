# {Decision on backend implementation of delete}

* Status: {accept}
* Deciders: {all team members} <!-- optional -->
* Date: {2022-11-01} <!-- optional -->

## Context and Problem Statement

We were discussing what the delete button should actually do

## Decision Drivers <!-- optional -->

* Easy to implement
* Project Criteria
* Clearly deletes from user pov
  
## Considered Options

1 changes entry to a default entry with empty fields 
  * nothing is actually deleted

2 maps the date's key to null
  * key still exist
  * therefore it wasn't completely deleted

3 completely removes entry (key and value are removed)
  * uses the **removeItem** function from localStorage
  * deletes everything related to that entry
  
## Decision Outcome
Option 3
All options "deletes" from the users interactions\
But option 3 most closely aligns with the "delete"\
requirement of CRUD

## Pros and Cons of the Options <!-- optional -->

### Pros:
* All options carry out the correct user functionality
* Option 3 fulfills project requirements


### Cons:
* Option 1 and 2 do not fulfill project requirements