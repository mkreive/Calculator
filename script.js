"use strict";

// DATA

// SELECTORS
const app = document.getElementById("app-root");
const themeSwitchBtns = document.querySelectorAll(".toggle__buttons-btn");
const themeCircle = document.querySelector(".toggle__bar");
const buttons = document.querySelectorAll(".btn");
const btnNumber = document.querySelectorAll(".btn-number");
const btnActions = document.querySelectorAll(".btn-actions");
const screenValueEl = document.querySelector(".screen-number");

// VARIABLES

// HELPER FUNCTIONS

// LISTENERS
themeSwitchBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const theme = e.target.innerText;

        app.classList.remove(app.classList.value);
        app.classList.add(`theme-${theme}`);

        if (theme == 1) {
            themeCircle.style.justifyContent = "flex-start";
        } else if (theme == 2) {
            themeCircle.style.justifyContent = "center";
        } else if (theme == 3) {
            themeCircle.style.justifyContent = "flex-end";
        } else {
            console.error("Error changing themes");
        }
    });
});
// const cleanUp = function () {
//     number = "";
//     screenValueEl.textContent = "";
// };

let numbersArray = [];
let number;
let prevNumber;
let calculation = [];

buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        let clickedBtn = e.target;

        if (clickedBtn.classList.contains("btn-number")) {
            screenValueEl.textContent = "";

            numbersArray.push(clickedBtn.textContent);
            number = parseInt(numbersArray.join(""));
            screenValueEl.textContent = number;
        } else if (clickedBtn.classList.contains("btn-actions")) {
            prevNumber = number;
            number = "";

            screenValueEl.textContent = clickedBtn.innerText;
            calculation.push(prevNumber + clickedBtn.innerText);
            numbersArray = [];
        }
    });
});
