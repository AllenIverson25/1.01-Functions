// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  const name = prompt("What is your actual real life name?")
  if (!name) {
    render("<h1> Do you not have a name? You left this blank! </h1>")
    return 
  }
  render (`<p> Hello, ${name}! Nice to meet you! </p>`)
} 

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  const input = prompt('Enter numbers separated by commas (e.g., 5, 10, 15):')
  
  if (!input) {
    render('<p>No input provided!</p>')
    return
  }

  const numbers = input.split(',').map(str => parseFloat(str.trim()))
  
  if (numbers.some(isNaN)) {
    render('<p>Please enter valid numbers only!</p>')
    return
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0)
  const average = sum / numbers.length

  render(`
    <p><strong>Numbers:</strong> ${numbers.join(', ')}</p>
    <p><strong>Average:</strong> ${average.toFixed(2)}</p>
  `)
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  const h = new Date().getHours()
  let msg = ''

  if (h < 12) {
    msg = 'Good Morning!'
  } else if (h < 18) {
    msg = 'Good Afternoon!'
  } else {
    msg = 'Good Evening!'
  }

  render(`<p>${msg}</p>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  const min = parseInt(prompt('Enter the minimum number:'))
  const max = parseInt(prompt('Enter the maximum number:'))

  if (isNaN(min) || isNaN(max)) {
    render('<p>Please use actual numbers! </p>')
    return
  }

  if (min >= max) {
    render('<p> Please make sure the minimum number is less than the max! </p>')
    return
  }

  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min
  render(`<p> Your random number between ${min} and ${max} is ${rndNum} </p>`)
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  document.getElementById('out').innerHTML = '<p>Output cleared.</p>'
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don't forget to connect each one 
  to a new button in index.html using addEventListener.
*/

/* 
  Challenge Function 1 — changePageTitle()
  -----------------------------------------
  - Updates the page title (h1) to a new message
*/
function changePageTitle() {
  const titleElement = document.getElementById('pageTitle')
  const newTitle = prompt('Enter a new page title:')
  
  if (newTitle) {
    titleElement.textContent = newTitle
    render(`<p>Page title changed to: <strong>${newTitle}</strong></p>`)
  } else {
    render('<p>No title entered. Title remains unchanged.</p>')
  }
}

/* 
  Challenge Function 2 — cycleOutputColor()
  ------------------------------------------
  - Cycles through different text colors each time clicked
*/
let colorIndex = 0
const colors = ['#dc2626', '#15803d', '#d97706', '#2563eb', '#7c3aed', '#db2777']

function cycleOutputColor() {
  const outElement = document.getElementById('out')
  outElement.style.color = colors[colorIndex]
  
  render(`<p>Text color changed to: <strong>${colors[colorIndex]}</strong></p>`)
  
  colorIndex = (colorIndex + 1) % colors.length
}

/* 
  Challenge Function 3 — randomBackgroundColor()
  -----------------------------------------------
  - Changes the background color of the output box to a random color
*/
function randomBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const randomColor = `rgb(${r}, ${g}, ${b})`
  
  const outElement = document.getElementById('out')
  outElement.style.backgroundColor = randomColor
  outElement.innerHTML = `<p>Background color changed to: <strong>${randomColor}</strong></p>`
}

/* 
  Challenge Function 4 — doubleNumber()
  --------------------------------------
  - Asks user for a number and displays it doubled
*/
function doubleNumber() {
  const input = prompt('Enter a number to double:')
  const number = parseFloat(input)
  
  if (isNaN(number)) {
    render('<p>Please enter a valid number!</p>')
    return
  }
  
  const doubled = number * 2
  render(`<p><strong>${number}</strong> doubled is <strong>${doubled}</strong></p>`)
}

// Event listeners for the challenge buttons
document.getElementById('btnChangeTitle').addEventListener('click', changePageTitle)
document.getElementById('btnCycleColor').addEventListener('click', cycleOutputColor)
document.getElementById('btnBgColor').addEventListener('click', randomBackgroundColor)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)