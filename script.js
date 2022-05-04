"use strict";

// DATA

// SELECTORS
const app = document.getElementById("app-root");
const themeSwithBtns = document.querySelectorAll(".toggle__buttons-btn");
const themeCircle = document.querySelector(".toggle__bar");
// VARIABLES

// HELPER FUNCTIONS

// LISTENERS
themeSwithBtns.forEach((btn) => {
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
