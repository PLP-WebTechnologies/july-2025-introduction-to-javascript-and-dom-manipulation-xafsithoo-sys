// Part 1: Variables & Conditionals

function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = " You can vote.";
  } else {
    result = "You are a minor" ;
  }

  document.getElementById("ageResult").textContent = result;
}


//  Part 2: Functions


// Function to format a name (capitalize first letter)
function formatString(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Show formatted name
function showFormatted() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("formattedName").textContent = formatString(name);
}

// Toggle secret message
function toggleMessage() {
  let msg = document.getElementById("secretMessage");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
}


// 🔁 Part 3: Loops


// For loop: display fruits
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
let fruitsList = document.getElementById("fruitsList");
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  fruitsList.appendChild(li);
}

// While loop: simple countdown
let countdownNum = 5;
let countdownText = "";
while (countdownNum > 0) {
  countdownText += countdownNum + "... ";
  countdownNum--;
}
document.getElementById("countdown").textContent = countdownText + "Go!";

// Part 4: DOM Manipulation


// 1. Change background color on button click
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.background = 
    document.body.style.background === "lightblue" ? "#f9f9f9" : "lightblue";
});

// 2. Add new item to a list dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New item added!";
  document.getElementById("dynamicList").appendChild(newItem);
});
// DOM trick: Change text color when clicking the secret message
document.getElementById("secretMessage").addEventListener("click", function() {
  this.style.color = this.style.color === "red" ? "black" : "red";
});

