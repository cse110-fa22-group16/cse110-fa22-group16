window.addEventListener('DOMContentLoaded', init);

let currentComment = ""
let currentRating = ""
function init() {
    //toggle between read-only and edit mode
    mode = "read"; 
    
    //FOR TESTING ONLY (TODO: implement the actually data instead of this)
    currentRating = "Good";
    currentComment = "Today was a good day :)";

    const rating = document.querySelector("#ratingRead");
    rating.innerHTML = currentRating;

    const comment = document.querySelector("#commentRead");
    comment.innerHTML = currentComment;

    
}

init();

//Button and Datafield constants for reference
const ratingRead = document.querySelector("#ratingRead");
const ratingEdit = document.querySelector("#ratingEdit");
const commentRead = document.querySelector("#commentRead");
const commentEdit = document.querySelector("#commentEdit");
const updateButton = document.querySelector("#updateButton");
const editButton = document.querySelector("#editButton");

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

    //TODO: Get values from select/textarea and update data

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

});