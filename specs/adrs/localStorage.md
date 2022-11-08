Local Storage Items:\
Note: "0000-00-00" in this document will represent a date
<br><br>
- Key: "year-month-date" (0000-00-00) 
- Use: storing each entry as a separate item
- Format (JSON File):
- {\
      "rating":  "1"/"2"/"3"/"4"/"5",\
      "comment": "a bunch of text here",\
      "done": "true"/"false",\
      "editted":"true"/"false",\
- }\
<br><br>
- Key: "currentState"
- Use: Passed from calendar to edit page 
       so that edit page knows what date to access
- Format (returns key):
- "year-month-date"
<br><br>
- Key: "currentDate"
- Use: Allows each page to get the current date if needed
- Format (returns key):
- "year-month-date"
<br><br>
- Key: "colors"
- Use: Convert ratings to corresponding colors
- Format (JSON File):
- {\
        "1": ,\
        "2": ,\
        "3": ,\
        "4": ,\
        "5": ,\
  }


Local Storage Flow:
1) Hello Page:
    - setItem(currentDate,"0000-00-00") to set the current date
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


