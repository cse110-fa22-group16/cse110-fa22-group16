# {Decision on how to use localStorage}

* Status: {accept}
* Deciders: {all} <!-- optional -->
* Date: {2022-11-01} <!-- optional -->

## Context and Problem Statement
- Our app requires storage and updating of entries and dates
- localStorage is an easy method of incorporating that, and is already implemented for us to use
- It is just a matter how do we universally format our data

## Decision Drivers <!-- optional -->

- What is easy to implement?
- What is easier to interact with in the code?
- What allows all pages to communicate?

## Considered Options

1) Store each entry as a separate key
- Key: "year-month-date" (0000-00-00) 
- Format (JSON File):
- {\
      "rating":   "terrible"/"bad"/"neutral"/"good"/"great",\
      "comment": "a bunch of text here",\
      "editted":"true"/"false",\
- }\
<br><br>
2) Some shared variable between pages
- Key: "currentState"
- Use: Passed from calendar to edit page 
       so that edit page knows what date to access
- Format (returns key):
- "year-month-date"
  
<br><br>
3) Storing the colors as a dictionary
- Key: "colors"
- Use: Convert ratings to corresponding colors
- Format (JSON File):
- {\
        "terrible": ,\
        "bad": ,\
        "neutral": ,\
        "good": ,\
        "great": ,\
  }

## Decision Outcome
All options accepted

## Pros and Cons of the Options <!-- optional -->
Pros of all options:
- Allows all of the pages to communicate
- Easy to use
- Carries out desired functionality

## Additional Info
Local Storage Flow:
1) Hello Page:
    - User enters their rating/comment
    - A new entry is created and formatted
    - setItem("0000-00-00" , new entry)
  
2) Calendar:
   - Loop through the displayed month's local storage to find days with existing entries
     to make it clickable using getItem(date) for each day
   - When user clicks on a day, setItem("currentState","0000-00-00")

3) Edit Page:
   - Use the date from getItem("currentState") to get the desired entry using 
    getItem("0000-00-00") to populate the data
   - If the user deletes the entry, removeItem("0000-00-00") to remove the selected entry
   - If the user edits the entry, setItem("0000-00-00", new data)


