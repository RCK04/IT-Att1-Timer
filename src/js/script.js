import Animations from "./module-animations.js";
import Countdown from "./countdown.js";

Animations();


const countdown = new Countdown("Oct 28, 2024 00:00:00");
countdown.start();


let addHour = document.querySelector(".add-btn");
let removeHour = document.querySelector(".remove-btn");

addHour.addEventListener("click", () => {
    countdown.addHour();
});

removeHour.addEventListener("click", () => {
    countdown.removeHour();
});

