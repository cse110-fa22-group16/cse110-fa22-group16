window.addEventListener('DOMContentLoaded', init);


function getDaysInMonth(year, month) {
    // month starts at 0 index
    //passing in 0 to get the previous month
    //ex: (2022, 07, 0) => # of days in June.
    return new Date(year, month, 0).getDate();
  }

function getFirstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
}


function createGrids(year, month){

    const today = new Date();
    const firstDay = getFirstDay(year, month);
    const numberDays = getDaysInMonth(year, month);
    console.log(numberDays);
    console.log(firstDay);

    const target = document.querySelector('.date-grid')
    
    //grids before first day of the month
    for(let i = 0; i < firstDay; i++){
        const grid = document.createElement('div');
        target.appendChild(grid);
    }

    //grids in the month
    for(let i = 1; i <= numberDays; i++){
        const dayElement = document.createElement('div');
        const dayDiv = document.createElement('div');
        const day = document.createTextNode(i);
        target.appendChild(dayElement);
        dayElement.appendChild(dayDiv);
        dayDiv.className = month + "-" + i + "-" + year;
        dayDiv.appendChild(day);
        
        if(today.getFullYear() == year && today.getDate() == i && today.getMonth() + 1 == month){
            dayElement.className = 'day today';
        }
        else
            dayElement.className = 'day';
    
        
        if(localStorage.getItem(`${year}-${month}-${i}`) != null){
            dayElement.setAttribute('onclick', `changePage("${year}-${month}-${i}")`);
        }
    }
}

function changePage(date){
    //current date
    //alert(date);
    localStorage.setItem("currentState", date);
    location.replace('../edit-page/edit-page.html');
}

//delete the whole grids for refreshing purpose.
function deleteGrids(){
    const target = document.querySelector('.date-grid');
    const child = target.querySelectorAll('div')
    for(let i = 0; i < child.length; i++){
        child[i].remove();
    }
}

function init(){

    const date = new Date(); //get today's date
    const year = date.getFullYear(); //current year
    const month = date.getMonth() + 1; //current month
    createGrids(year, month);
    
    const test = document.querySelector('#start');

    test.addEventListener('change', ()=>{
        deleteGrids(); //refresh the calender before generating.
        const st = test.value.split("-");   
        createGrids(st[0] - 0, st[1] - 0);
    });

}