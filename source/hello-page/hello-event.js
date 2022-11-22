window.addEventListener('DOMContentLoaded', init);

/**
 * Handle form submission, button clicking, and localStorage specific to the 
 * three user flow pages (home-page, prompt-page, finish-page).
 */
function init() {
    let dateObj = new Date();
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let key = `${year}-${month}-${date}`;

    let form = document.querySelector("#prompt-form");
    if (form != null) {
        form.addEventListener("submit", submitAndStore);
    }
    
    let goButton = document.querySelector(".go-button");
    if (goButton != null) {
        goButton.addEventListener("click", checkAndGo);
    }
    
    let todayEntryBtn = document.querySelector(".today-entry-btn");
    if (todayEntryBtn != null) {
        todayEntryBtn.addEventListener("click", stageAndGoToEntry);
    }
    
    // storing colors to localStorage
    const colors = {
        terrible: "#8E6E5E",
        bad: "#586689",
        neutral: "#F9DEC9",
        good: "#339989",
        great: "#D7B4F3"
    };
    if (localStorage.getItem('colors') == null) {
        localStorage.setItem('colors', JSON.stringify(colors));
    }

    /**
     * Handle the prompt page form submission and store the information 
     * including feeling and comment as an entry with date as key in localStorage.
     */
    function submitAndStore() {
        let formData = new FormData(form);
        let feeling = formData.get("feelings");
        let comment = formData.get("comment");

        let entry = new Object();
        entry.rating = feeling;
        entry.comment = comment;
        entry.edited = false;

        localStorage.setItem(key, JSON.stringify(entry));
    }

    /**
     * Handle home page clicking "let's go" button: take to prompt page if 
     * today's entry does not exist; take to finish page if today's entry exists.
     */
    function checkAndGo() {
        if (localStorage.getItem(key) == null) {
            location.href = "prompt-page.html";
        }
        else {
            location.href = "finish-page.html";
        }
    }

    /**
     * Handle finish page clicking "your entry" button: store currentStage as
     * today's date and take to the edit page for today's entry.
     */
    function stageAndGoToEntry() {
        localStorage.setItem('currentState', JSON.stringify(key));
        location.href = "../edit-page/edit-page.html";
    }
}