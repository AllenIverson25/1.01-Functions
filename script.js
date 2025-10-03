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
  // TODO: Write your code here
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
  // TODO: Write your code here
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here

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
  // TODO: Write your code here
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
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

