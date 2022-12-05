alert("Welcome to our website")

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const text = document.querySelector("#text")
let number = 0;

function addNumber() {
    text.innerText = ++number;
}

function deleteNumber() {
    text.innerText = --number;
}

btn1.addEventListener("click", addNumber)
btn2.addEventListener("click", deleteNumber)