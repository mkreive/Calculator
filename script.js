"use strict";

// SELECTORS
const app = document.getElementById("app-root");
const themeSwitchBtns = document.querySelectorAll(".toggle__buttons-btn");
const themeCircle = document.querySelector(".toggle__bar");
const buttons = document.querySelectorAll(".btn");
const screenValueEl = document.querySelector(".screen-number");

// VARIABLES
let calculation = [];
let numbersArray = [];
let number;
let prevBtn;
let btnType = "";
let answer;

// HELPER FUNCTIONS

const checkBtnType = function (e) {
    if (e.target.classList.contains("btn-number")) {
        btnType = "number";
    } else if (e.target.classList.contains("btn-actions")) {
        btnType = "action";
    } else if (e.target.classList.contains("btn-del")) {
        btnType = "delete";
    } else if (e.target.classList.contains("btn-reset")) {
        btnType = "reset";
    } else if (e.target.classList.contains("btn-sum")) {
        btnType = "sum";
    } else {
        alert("something went wrong!");
    }
};

const clearInfo = function () {
    screenValueEl.textContent = "";
    calculation = [];
    numbersArray = [];
    number;
    prevBtn;
    btnType = "";
    answer;
};

const calculate = function (calc) {
    return eval(calc.join(""));
};
// LISTENERS
// theme switcher
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

// all buttons
buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        checkBtnType(e);
        let clickedBtn = e.target.textContent;

        if (btnType === "number") {
            numbersArray.push(clickedBtn);
            number = numbersArray.join("");
            screenValueEl.textContent = number;
            prevBtn = clickedBtn;
        } else if (btnType === "action" || btnType === "sum") {
            if (number) {
                calculation.push(number);
                number = "";
                numbersArray = [];
            }
            if (isNaN(prevBtn)) {
                calculation.pop();
            }
            if (calculation.length > 2) {
                answer = calculate(calculation);
                calculation = [];
                calculation.push(answer);
            }
            if (btnType === "sum") {
                screenValueEl.textContent = answer;
                return;
            }

            calculation.push(clickedBtn);
            screenValueEl.textContent = clickedBtn;
            prevBtn = clickedBtn;
        } else if (btnType === "delete") {
            numbersArray.pop();
            number = numbersArray.join("");
            screenValueEl.textContent = number;
        } else if (btnType === "reset") {
            clearInfo();
        } else {
            alert("something went wrong 💥");
        }
        console.log(answer);
    });
});
