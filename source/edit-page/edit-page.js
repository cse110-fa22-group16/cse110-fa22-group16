window.addEventListener('DOMContentLoaded', init);

let currentComment = ""
let currentRating = ""
let colorDict = {
    "Terrible" : "#8E6E5E",
    "Bad" : "#586689",
    "Neutral" : "#F9DEC9",
    "Good" : "#339989",
    "Great" : "#D7B4F3"
}

//Button and Datafield constants for reference
const ratingRead = document.querySelector("#ratingRead");
const ratingEdit = document.querySelector("#ratingEdit");
const commentRead = document.querySelector("#commentRead");
const commentEdit = document.querySelector("#commentEdit");
const updateButton = document.querySelector("#updateButton");
const editButton = document.querySelector("#editButton");
const editBox = document.querySelector(".edit-box");
const mainEdit = document.querySelector("#mainEdit");

function init() {
    //toggle between read-only and edit mode
    mode = "read"; 
    
    //FOR TESTING ONLY (TODO: implement the actually data instead of this)
    currentRating = "Good";
    editBox.style.backgroundColor = colorDict[currentRating];
    currentComment = "Today was a good day :)";

    const rating = document.querySelector("#ratingRead");
    rating.innerHTML = currentRating;

    const comment = document.querySelector("#commentRead");
    comment.innerHTML = currentComment;

    
}

init();

ratingEdit.addEventListener("change", function(){
    currentRating = ratingEdit.value;
    editBox.style.backgroundColor = colorDict[currentRating];
});

editButton.addEventListener("click", function(){

    //Button pressed during the default "read only" mode
    //Read Mode -> Edit Mode
    if(mode == "read"){
        //Change Modes
        mode = "edit";

        //Change Buttons
        editButton.innerHTML = "Delete";            //Turn edit button into delete
        updateButton.style.visibility = "visible";  //Show update button
        
        //TODO: Make the initially selected value to be the current rating

        //Make inputs editable
        //Turn rating into a select element
        ratingRead.style.display = "none";
        ratingEdit.value = currentRating;
        ratingEdit.style.display = "inline";
        
        //Turn comment into a textarea
        commentRead.style.display = "none";
        commentEdit.style.display = "inline";
        commentEdit.value = currentComment;
    }

    //In edit mode
    //"edit-button" currently is the "delete" button
    //Delete Entry
    else if(mode == "edit"){
        mode = "read"; //go back to defualt
        
    }
});

//In edit mode (that's the only time update is visible)
//Edit Mode -> Read Mode
const pressUpdate = document.querySelector("#updateButton");
pressUpdate.addEventListener("click", function(){

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

    //TODO: Change this to updating localStorage
    currentRating = ratingEdit.value;
    currentComment = commentEdit.value;

    //TODO: Change this to reading values from localStorage
    ratingRead.innerHTML = currentRating;
    commentRead.innerHTML = currentComment;

});