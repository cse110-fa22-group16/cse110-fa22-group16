function generateChart(year, month){
   
    let countTerrible, countBad, countNeutral, countGood, countGreat = 0;
    
    let numberDays = getDaysInMonth(year, month)

    for(let i = 1; i <= numberDays; i++){


        
        let mood = JSON.parse(localStorage.getItem(`${year}-${month}-${i}`))['rating'];
        if(mood == 'terrible'){
            countTerrible++;
        }
        else if(mood == 'bad'){
            countBad++;
        }
        else if(mood == 'neutral'){
            countNeutral++;
        }
        else if(mood == 'good'){
            countGood++;
        }
        else{
            countGreat++;
        }
    }

    console.log(countGood);
}

anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "White", value: 223553265},
        {x: "Black or African American", value: 38929319},
        {x: "American Indian and Alaska Native", value: 2932248},
        {x: "Asian", value: 14674252},
        {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
        {x: "Some Other Race", value: 19107368},
        {x: "Two or More Races", value: 9009073}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('pie');
    chart.draw();
  });



try { // only in testing.
    module.exports = { getDaysInMonth, getFirstDay };
} catch {}

try { // only in deployment.
    window.addEventListener('DOMContentLoaded', init);
} catch {}

/**
 * Returns the number of days in `month` and `year`.
 * 
 * @param {year} year 
 * @param {month} month 
 * @returns the number of days in `month` and `year`.
 */
function getDaysInMonth(year, month) {
    // month starts at 0 index
    //passing in 0 to get the previous month
    //ex: (2022, 07, 0) => gives us # of days in June.
    return new Date(year, month, 0).getDate();
  }

/**
 * Returns the first day of the week of given month year.
 * If `month`/01/`year` is a Sunday, it returns 0.
 * If Monday, returns 1. And so on.
 * 
 * @param {year} year
 * @param {month} month 
 * @returns the first day of the week of given month year
 */
function getFirstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
}

/**
 * Generate the relavant dates in the calendar and populates it with data from `localStorage`.
 * 
 * **Assumptions**: a 7x7 container with class name `.date-grid` exists. 
 * 
 * **Technical Details**: If the first day of `month` starts on day of the week `w`--i.e. 
 * Sunday is `0`, Monday is  `1`--then `w` divs are inserted. The rest of the grid is filled with 
 * divs with date and all of the dates that is an `entry` in `localStorage`, it is modified to be 
 * clickable.
 * 
 * @param {year} year 
 * @param {month} month 
 */
function createGrids(year, month){
    // TODO: `colors` should be retrieved from `localStorage`. Placeholder data for now.
    const colors = {
        terrible: "#8E6E5E",
        bad: "#586689",  
        neutral: "#F9DEC9",
        good: "#339989",
        great: "#D7B4F3"
    }

    const today = new Date();
    const firstDay = getFirstDay(year, month);
    const numberDays = getDaysInMonth(year, month);

    const target = document.querySelector('.date-grid');
    
    //create empty divs before first day of the month
    for(let i = 0; i < firstDay; i++){
        const grid = document.createElement('div');
        target.appendChild(grid);
    }

    //create date elements
    for(let currDay = 1; currDay <= numberDays; currDay++){
        // Create elements.
        //create date element.
        const dateElement = document.createElement('div');
        target.appendChild(dateElement);
        
        //create label for day number of the month.
        const dayDiv = document.createElement('div');
        dayDiv.className = month + "-" + currDay + "-" + year;
        //create text element for the number itself.
        const dayNumber = document.createTextNode(currDay);
        dayDiv.appendChild(dayNumber);
        dateElement.appendChild(dayDiv);
        
        // Classify date & Populate with data.
        //if current day is today,
        if(today.getFullYear() == year && 
           today.getDate() == currDay && 
           today.getMonth() + 1 == month){
            dateElement.className = 'day today';
        }
        //if not today,
        else{
            dateElement.className = 'day';
        }
    
        //if entry exists for currDay, populate the date element with data in entry.
        const rawEntry = localStorage.getItem(`${year}-${month}-${currDay}`);
        const entry = JSON.parse(rawEntry);
        if(entry != null){

            //link function for changing page
            dateElement.setAttribute('onclick', `changePage("${year}-${month}-${currDay}")`);

            //color
            dateElement.style = "background-color: " + colors[entry.rating];
        }
    }
}

/**
 * Changes to the edit-page. `date` is passed onto `key: currentState` in the `localStorage`. 
 * 
 * @param {date} date 
 */
function changePage(date){
    //update currentState for edit-page
    localStorage.setItem('currentState', JSON.stringify(date));
    location.replace('../edit-page/edit-page.html');
}

/**
 * Deletes all the day elements in calendar container.
 * 
 * All the div elements in the .date-grid container is removed.
 * 
 * @example
 * deleteGrids();
 */
function deleteGrids(){
    const target = document.querySelector('.date-grid');
    const child = target.querySelectorAll('div')
    for(let i = 0; i < child.length; i++){
        child[i].remove();
    }
}

function init(){
    //currentState logic
    const currentState = JSON.parse(localStorage.getItem('currentState'));

    let year = 0;
    let month = 0;

    //case: render today.
    if (!currentState){
        const todayDate = new Date(); //get today's date
        year = todayDate.getFullYear(); //current year
        month = todayDate.getMonth() + 1; //current month
        createGrids(year, month);
    }
    //case: render currentState.
    else{
        const dateArr = currentState.split("-");
        year = dateArr[0];
        month = dateArr[1];

        createGrids(year, month);
    }
    
    const dateSelectorElement = document.querySelector('#dateSelect');
    dateSelectorElement.setAttribute('value',`${year}-${month}`);

    dateSelectorElement.addEventListener('change', () => {
        deleteGrids(); //refresh the calender before generating.
        const dateArr = dateSelectorElement.value.split("-"); // "year-month"
        const year = dateArr[0] - 0;
        const month = dateArr[1] - 0;
        createGrids(year, month);
    });

    generateChart(year, month);
}