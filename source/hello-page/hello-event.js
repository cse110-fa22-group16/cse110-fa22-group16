// when clicking finish, store the inputs into localStorage as an entry for the day

let dateObj = new Date();
let date = dateObj.getDate();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();
let key = `${year}-${month}-${date}`;

let form = document.querySelector("form");
if (form != null) {
    form.addEventListener("submit", submitAndStore);
}

let goButton = document.querySelector(".go-button");
if (goButton != null) {
    goButton.addEventListener("click", checkAndGo);
}

let headerDate = document.querySelector('header>span');
if (headerDate != null) {
    headerDate.textContent = `${month}/${date}/${year}`;
}

/**
 * handle the prompt page form submission and store the information 
 * as an entry with date as key in localStorage
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

    location.href = "finish-page.html";
}

function checkAndGo() {
    if (localStorage.getItem(key) == null) {
        location.href = "prompt-page.html";
    }
    else {
        location.href = "finish-page.html";
    }
}
