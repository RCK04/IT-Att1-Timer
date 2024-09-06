// Utilizando o ES6 Modules
import Animations from "./module-animations.js";

// Chamando o animations
Animations();

let countdownDate = new Date("Sep 06, 2024 00:00:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');;

    if(distance < 0){
        // clearInterval(interval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        removeHour.disabled = true;
        
    } else{
        removeHour.disabled = false;
    }

}, 1000);

let addHour = document.querySelector(".add-btn");
let removeHour = document.querySelector(".remove-btn");

addHour.addEventListener("click", () => {
    countdownDate += 1000 * 60 * 60;
    removeHour.disabled = false;
});

removeHour.addEventListener("click", () => {
    const time = new Date();

    if(countdownDate - time.getTime() > 0){
        countdownDate -= 1000 * 60 * 60;
    } 
    
    else{
        removeHour.disabled = true;
    }
    
    
})
