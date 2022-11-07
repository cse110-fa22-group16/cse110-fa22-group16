window.addEventListener('DOMContentLoaded', init);

let currentComment = ""
let currentRating = ""
function init() {
    //toggle between read-only and edit mode
    mode = "read"; 
    
    //FOR TESTING ONLY (TODO: implement the actually data instead of this)
    currentRating = "Good";
    currentComment = "Today was a good day :)";

    const rating = document.querySelector("#rating");
    rating.innerHTML = "Rating: " + currentRating;

    const comment = document.querySelector("#comment");
    comment.innerHTML = "Comment: " + currentComment;

    
}

init();


const updateButton = document.querySelector(".update-button");
const editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", function(){
    //Button pressed during the default "read only" mode
    //Read Mode -> Edit Mode
    if(mode == "read"){
        //Change Modes
        mode = "edit";

        //Change Buttons
        editButton.innerHTML = "Delete";                                         //Turn edit button into delete
        updateButton.style.visibility = "visible";  //Show update button
        
        //TODO: Make the initially selected value to be the current rating
        //Make inputs editable
        //Turn rating into a select element
        const ratingSelect =
            `<label for="ratings">Rating:</label>
            <select name="ratings" id="ratings" >`
            +
                `<option value="Terrible">Terrible</option>
                <option value="Bad">Bad</option>
                <option value="Neutral">Neutral</option>
                <option value="Good">Good</option>
                <option value="Great">Great</option>
            </select>`
        rating.innerHTML = ratingSelect;
        rating.value = currentRating;
        //Turn comment into a textarea
        const commentTextArea = "Comment:<br> <textarea class = `commentBox`>"+currentComment+"</textarea>"
        comment.innerHTML = commentTextArea;
    }

    //In edit mode
    //"edit-button" currently is the "delete" button
    //Delete Entry
    else if(mode == "edit"){
        mode = "read"; //go back to defualt
        
    }
});

//In edit mode (that's the only time update is visible)
const pressUpdate = document.querySelector(".update-button");
pressUpdate.addEventListener("click", function(){

    //TODO: Get values from select/textarea and update data
    const commentBox = document.querySelector(".commentBox");
   
    //Return to read only mode
    mode = "read";
    editButton.innerHTML = "Edit";
    updateButton.style.visibility = "hidden";
    rating.innerHTML = currentRating;
    comment.innerHTML = currentComment;

});