window.addEventListener('DOMContentLoaded', init);


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

function createGrids(){


    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const numberDays = getDaysInMonth(today.getFullYear(), today.getMonth());
    console.log(numberDays)
    //Tues, Monday...
    const target = document.querySelector('.date-grid')

    //grids before first day of the month
    for(let i = 0; i < firstDay; i++){
        const grid = document.createElement('div');
        target.appendChild(grid);
    }

    //grids in the month
    for(let i = 1; i < numberDays; i++){
        const grid = document.createElement('div');
        target.appendChild(grid);
        
        if(today.getDate() == i){
            grid.className = 'day today';
        }
        else
            grid.className = 'day';
    }
}

function init(){

    const date = new Date();
    const year = date.getFullYear(); //current year
    const month = date.getMonth() + 1; //current month

    const daysInCurrentMonth = getDaysInMonth(year, month); // # of days in current month

    console.log(daysInCurrentMonth);
    
    createGrids();
}