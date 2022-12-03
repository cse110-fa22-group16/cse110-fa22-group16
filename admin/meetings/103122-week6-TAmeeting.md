# Meeting Minutes
## Team #16: Githubbies

### Details:
- **10/31/22 12:30pm - 1:00pm**
- **Location: Geisel Library 1nd Floor**

### Attendance: 
- [x] Shubham Kumar (TA)
- [x] Gunwoo Kim (Lead)
- [x] Abishek Siva (Lead)
- [x] Maximillian Chen
- [x] Chun Hang Chan
- [ ] Raymond Umbas
- [x] Shantelle Serafin
- [ ] Jerry Wang
- [x] Xiangyi Lin
- [x] Tianyu Chen
- [x] Hung-I Huang

### Meeting Notes

* finalize design
* architechturue design
* pipelines
  - unit tests, come up with architecture design
      - can begin before code is written; modify the unit tests when the code is there
  - code style
  - coverage  
  - think storeage that is expandable and compatible
    - modular componets? simple enough for changes that might comme. 

* doc on architecture decision
  - why we made a certain choice

* begin development of project
* finish up the pitch

* Things we should get done:
  - storage
  - design
  - pipeline

* Storage
  - file (local storage in the storage); `set()`, `get()`
  - focus on the **data structure**, rather than how we have the data
  - `localStraoge.set()`

* Colors
  - save it on the code
    - user prefernce if they can change it
  - accessibility: can implement + add it to the report
    - **aria-label** for screen readers

### TODO

**Plans for meeting on (10/31)**
* Decide how will we do data integration.
  - a common ground is needed to connect the front and the back end without friction.
  - what are the essential information needed in each page?
  - what should be saved and loaded?

* Split into groups. Assign groups to do following:
  1. unit test set up, write up some cases
    - other groups should tell QAs about their potential modules that can be tested. 
  2. some groups will make the pages (html, css)
  3. one group figures our backend elements: storage method, calendar implementation, loading/saving data, popups. The priority will be implemented 
  - for all groups: PLEASE WRITE **REPORTS**--problems you have, requirements that might be needed, design choices. This information will be used in forming our ADR.

* Start our Architecture Decisions Record (ADR)
  - describe how we structure the code
    - css classes
  - describe and define other design choices

### Next Meeting
* 11/01/22 1:00PM-3:00PM 
* Geisel
