window.addEventListener('DOMContentLoaded', init);

//Variable Declarations
let mode = "";
let currentState = "";
let entry = {};

//Color Dictionary
let colors = {};

//Button and Datafield constants for element reference
const ratingRead = document.querySelector("#ratingRead");
const ratingEdit = document.querySelector("#ratingEdit");
const commentRead = document.querySelector("#commentRead");
const commentEdit = document.querySelector("#commentEdit");
const updateButton = document.querySelector("#updateButton");
const editButton = document.querySelector("#editButton");
const exitButton = document.querySelector("#exitButton");
const editBox = document.querySelector(".edit-box");
const mainEdit = document.querySelector("#mainEdit");

function init() {
    //----------------------------------------------------------------
    //FOR TESTING ONLY - REMOVE AFTER MERGE WITH OTHER PAGES
    //Mimic the setup other pages will do before getting to edit

    //Hello Page
    let colorDictTest = {
        "terrible" : "#8E6E5E",
        "bad" : "#586689",
        "neutral" : "#F9DEC9",
        "good" : "#339989",
        "great" : "#D7B4F3"
    }
    window.localStorage.setItem("colors", JSON.stringify(colorDictTest));

    let newEntry = {
        "rating" : "good",
        "comment" : "Today was a good day :)",
        "edited" : false
    }
    window.localStorage.setItem("0000-00-00", JSON.stringify(newEntry));

    //Calendar Page
    window.localStorage.setItem("currentState", "0000-00-00");
    //-----------------------------------------------------------------


    //toggle between read-only and edit mode
    mode = "read"; 
    
    //get the selected date and it's entry
    currentState = window.localStorage.getItem("currentState"); //year-month-day
    entry = JSON.parse(window.localStorage.getItem(currentState)); //{"rating": , "comment": , "editted": }

    //setup the color dictionary
    colors = JSON.parse(window.localStorage.getItem("colors"));
    editBox.style.backgroundColor = colors[entry["rating"]];

    //setup starting value display
    const rating = document.querySelector("#ratingRead");
    rating.innerHTML = entry["rating"];
    const comment = document.querySelector("#commentRead");
    comment.innerHTML = entry["comment"];
    const date = document.querySelector("#date");
    date.innerHTML = "date : " + currentState.split("").reverse().join("") ;

    
}

init();

//Edit Button / delete button (depends on mode)
editButton.addEventListener("click", function(){
    //Button pressed during the default "read only" mode
    //Read Mode -> Edit Mode
    if(mode == "read"){
        //Change Modes
        mode = "edit";

        //Change Buttons
        editButton.innerHTML = "Delete";            //Turn edit button into delete
        updateButton.style.visibility = "visible";  //Show update button
        
        //Make inputs editable
        //Turn rating into a select element
        ratingRead.style.display = "none";
        ratingEdit.value = entry["rating"];
        ratingEdit.style.display = "inline";
        
        //Turn comment into a textarea
        commentRead.style.display = "none";
        commentEdit.style.display = "inline";
        commentEdit.value = entry["comment"];
    }

    //In edit mode
    //"edit-button" currently is the "delete" button
    //Delete Entry
    else if(mode == "edit"){
        mode = "read"; //go back to defualt
        
    }
});

//During edit mode, change background color as rating is selected
ratingEdit.addEventListener("change", function(){
    entry["rating"] = ratingEdit.value;
    editBox.style.backgroundColor = colors[entry["rating"]];
});

//In edit mode (that's the only time update is visible)
//Edit Mode -> Read Mode
updateButton.addEventListener("click", function(){

    //Return to read only mode
    mode = "read";

    //Update Buttons
    editButton.innerHTML = "Edit";
    updateButton.style.visibility = "hidden";

    //Make data read only
    //Remove rating select element
    ratingRead.style.display = "inline";
    ratingEdit.style.display = "none";
    
    //Remove comment textarea
    commentRead.style.display = "inline";
    commentEdit.style.display = "none";

    //Update entry
    entry["rating"] = ratingEdit.value;
    entry["comment"] = commentEdit.value;
    entry["edited"] = true;

    //Update localStorage with edited entry
    window.localStorage.setItem(currentState, JSON.stringify(entry));

    //Setup updated page for read mode
    ratingRead.innerHTML = entry["rating"];
    commentRead.innerHTML = entry["comment"];

});

//"X" Exit button
exitButton.addEventListener("click", function(){
    //Reset mode
    mode = "read";
    //Go to Calendar
    window.location.href = "../calendar/index.html";
});

//For navbar clicks
function resetState(){
    window.localStorage.setItem("currentState", null);
}
