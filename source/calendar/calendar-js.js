window.addEventListener('DOMContentLoaded', init);


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

function createGrids(numberDays){
    
    const today = new Date().getDate();
    const target = document.querySelector('.totalDays')
    console.log(target);
    for(let i = today; i < numberDays; i++){
        const grid = document.createElement('div');
        target.appendChild(grid);
        if(today == i){
            grid.className = 'day today';
        }
        else{
            grid.className = 'day';
        }
        console.log('hi');
    }
}

function init(){

    const date = new Date();
    const year = date.getFullYear(); //current year
    const month = date.getMonth() + 1; //current month

    const daysInCurrentMonth = getDaysInMonth(year, month); // # of days in current month

    console.log(daysInCurrentMonth);
    
    createGrids(daysInCurrentMonth);
}