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

let numbersArray = [];
let number;
let prevBtn;
let calculation = [];
let btnType = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        // check type of button
        if (e.target.classList.contains("btn-number")) {
            btnType = "number";
        } else if (e.target.classList.contains("btn-actions")) {
            btnType = "action";
        }

        let clickedBtn = e.target.textContent;

        // if btn is number
        if (btnType === "number") {
            if (isNaN(prevBtn) && prevBtn) {
                console.log("buvo zenklas");
            }
            if (calculation.length > 0) {
                console.log("kackuliaciju arejus netuscias");
            }

            numbersArray.push(clickedBtn);
            number = parseInt(numbersArray.join(""));
            screenValueEl.textContent = number;
            prevBtn = clickedBtn;

            // if btn is an action
        } else if (btnType === "action") {
            calculation.push(number);
            number = "";
            numbersArray = [];

            calculation.push(clickedBtn);
            screenValueEl.textContent = clickedBtn;
            prevBtn = clickedBtn;
        }
        console.log(calculation);
    });
});
