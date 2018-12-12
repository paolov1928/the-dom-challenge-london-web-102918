const counter = document.querySelector("#counter")
const plusbutton = document.querySelector("#add")
const subtractbutton = document.querySelector("#subtract")


function addToCounter () {
  plusbutton.addEventListener("click", incrementCounter)
}

function subtractToCounter () {
  subtractbutton.addEventListener("click", decrementCounter)
}

function loadCounter () {
  counter.addEventListener("load", setInterval)
}

function incrementCounter() {
  counter.innerText++
}

function decrementCounter() {
  counter.innerText--
}






















setInterval(incrementCounter, 1000);
addToCounter();
subtractToCounter();
