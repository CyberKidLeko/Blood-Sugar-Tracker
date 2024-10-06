// Note: each row is will contain an arrary: date, time, and blood sugar reading
const currentRow = document.getElementById('row')
console.log(currentRow)
// variable to find add reading button
const addReading = document.getElementById('add_reading')


// create function to add row each time event listener is being clicked

function addRow() {
    //remove the for loop
    //no for loop means that the function can only create one row per click
    console.log(currentRow)
        // variables to create new row
    const addNewRow = document.createElement('tr')
    const dateData = document.createElement('td')
    const timeData = document.createElement('td')
    const readingData = document.createElement('td')
        
    addNewRow.setAttribute(
        'style', 
        'border: 1px solid black; height: 25px;'
    )
    dateData.setAttribute(
        'style',
        'border: 1px solid black;'
    )

    timeData.setAttribute(
        'style',
        'border: 1px solid black;'
    )

    readingData.setAttribute(
        'style',
        'border: 1px solid black;'
    )
    addNewRow.append(dateData, timeData, readingData)
    currentRow.append(addNewRow)
    
}

// event listener to make the button functional
addReading.addEventListener('click', addRow)
//you shouldnt call the addRow method. just reference it
//this makes sure it doesnt immediately call the method, but waits till the event occurs(button is clicked)
