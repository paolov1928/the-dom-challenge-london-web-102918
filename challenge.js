const counter = document.querySelector("#counter")

function loadCounter () {
  counter.addEventListener("load", setInterval)
}

function incrementCounter() {
  counter.innerText++
}

setInterval(incrementCounter, 1000);
