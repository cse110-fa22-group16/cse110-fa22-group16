Local Storage Items:\
Note: "0000-00-00" in this document will represent a date
<br><br>
- Key: "year-month-date" (0000-00-00) 
- Use: storing each entry as a separate item
- Format (JSON File):
- {\
      "rating":   "terrible"/"bad"/"neutral"/"good"/"great",\
      "comment": "a bunch of text here",\
      "editted":"true"/"false",\
- }\
<br><br>
- Key: "currentState"
- Use: Passed from calendar to edit page 
       so that edit page knows what date to access
- Format (returns key):
- "year-month-date"
<br><br>
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


