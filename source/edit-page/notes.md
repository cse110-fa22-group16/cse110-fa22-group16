Current Functionality:
  - Basic HTML frame and CSS style
  - Basic Javascript Button events
  - Switch between read only mode and edit mode
  - Displays a harcoded rating/comment

Current TODO:
  - **Read value from select/textarea** (Main Focus)
  - Implement using data from localStorage

Current Issues:
  - Added elements after switching modes, cannot select (saying it's null)
    - can't update with editted value until this is fixed

-----------------------------------------------------------------
General Outline of Tasks:
1) Make general frame/layout with buttons
2) Make buttons work (not necesarily with correct input)
3) Make editable inputs
4) Make inputs work with some set variable value
5) Implement using data from localStorage
6) Make delete button delete
7) Fix formatting
   - Center main middle data text
   - Make the layout work for any window size
8) Implement transitions between calendar page

-----------------------------------------------------------------
Notes/Useful Functions:
- Show/Hide Button
>function myFunction() {
>  var x = document.getElementById("myDIV");
> if (x.style.display === "none") {
>   x.style.display = "block";
> } else {
>   x.style.display = "none";
> }
>

- Toggling Text
>function myFunction() {
>  var x = document.getElementById("myDIV");
>  if (x.innerHTML === "Hello") {
>    x.innerHTML = "Swapped text!";
>  } else {
>    x.innerHTML = "Hello";
>  }
>}

- Transition from view to edit to view
><//textarea readonly="yes"><///textarea>