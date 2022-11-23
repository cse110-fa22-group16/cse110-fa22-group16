let header = document.querySelector("header");
header.innerHTML = `
<a href="home-page.html" onclick="resetState()"><img src="image/ref.png" alt="Reflect-logo"></a>
<span class="date-today"></span>
<a href="../calendar/index.html" class="to-calendar" onclick="resetState()">my calendar</a>`;

/* for dynamic date */
let dateObjDynamic = new Date();
let dateDynamic = dateObjDynamic.getDate();
let monthDynamic = dateObjDynamic.getMonth() + 1;
let yearDynamic = dateObjDynamic.getFullYear();

let headerDate = document.querySelector('header>.date-today');
if (headerDate != null) {
    headerDate.textContent = `${monthDynamic}/${dateDynamic}/${yearDynamic}`;
}

/**
 * Reset the currentState to null. Handle clicking logo or "my calendar" in the navbar.
 */
function resetState(){
    window.localStorage.setItem('currentState', null);
}