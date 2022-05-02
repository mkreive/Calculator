"use strict";
const html = document.querySelector("html");
html.dataset.theme = `theme-1`;
function switchTheme(theme) {
    console.log(theme);
    html.dataset.theme = `theme-${theme}`;
}
// const btn = document.querySelector(".button");
// btn.addEventListener("click", function (e) {
//     // switchTheme("2");
//     switchTheme(2);
// });

// DATA

// SELECTORS

// VARIABLES

// HELPER FUNCTIONS

// LISTENERS
