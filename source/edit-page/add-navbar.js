let header = document.querySelector("header");
header.innerHTML = `
<a href="home-page.html"><img src="image/ref.png" alt="Reflect-logo"></a>
<span class="date-today"></span>
<a href="" class="to-calendar">my calendar</a>  <!-- TODO: href to calendar page -->`;

/* for dynamic date */
let dateObjDynamic = new Date();
let dateDynamic = dateObjDynamic.getDate();
let monthDynamic = dateObjDynamic.getMonth() + 1;
let yearDynamic = dateObjDynamic.getFullYear();

let headerDate = document.querySelector('header>.date-today');
if (headerDate != null) {
    headerDate.textContent = `${monthDynamic}/${dateDynamic}/${yearDynamic}`;
}