import Animations from "./module-animations.js";
import Countdown from "./countdown.js";
Animations();

const countdown = new Countdown("May 24, 2025 00:00:00");
countdown.start();


let addHour = document.querySelector(".add-btn");
let removeHour = document.querySelector(".remove-btn");

addHour.addEventListener("click", () => {
    countdown.addHour();
});

removeHour.addEventListener("click", () => {
    countdown.removeHour();
});

