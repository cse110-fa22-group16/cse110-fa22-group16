# Meeting Minutes
## Team #16: Githubbies
### Sprint
- **11/08/22 1:00PM-3:00PM**
- **Location: Geisel Library 1st Floor**

### Attendance
- [ ] Shubham Kumar (TA)
- [x] Gunwoo Kim (Lead)
- [x] Abishek Siva (Lead)
- [ ] Maximillian Chen
- [x] Chun Hang Chan
- [x] Raymond Umbas
- [x] Shantelle Serafin
- [x] Jerry Wang
- [x] Xiangyi Lin
- [x] Tianyu Chen
- [ ] Hung-I Huang

### Agenda
- Save data to local storage and populating the html pages
- Github Issue template
- Figure out how to do GitHub workflow 
- CI/CD 
  - LintCheck - HTML 
  - Dummy js file that has dummy js test cases
  - Github actions can be used for it

### Achieved
- Consensus on how data should be saved & deleted
  - From each page, we know exactly how data will be stored.
  - We know eactly how data will be deleted (edit page).
  - Between calendar and edit page, we need to pass in which date we are modifying. Requires a local variable stord in `localStorage`.
- Issue template
  - Fixed format of all issues.  
- Added more tags for issue and pull request.
- Pull request template
- Tried to set up CI/CD
- Clarified our workflow.
  - Only 3 deep branches. There are 3 branches from main, hello, calendar, edit. From each of those, we only branch once more for features/bug fixes/etc.
  - When done with a subtask of a particular page, make a pull request, linked with the corresponding issue. 
  - Review then merge.   

### TODO
- Update ADR for your page.
