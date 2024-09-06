// Utilizando o ES6 Modules
import Animations from "./module-animations.js";
import Countdown from "./countdown.js";
// Chamando o animations
Animations();

// Ao instanciar a classe criamos um Objeto.
const countdown = new Countdown("Oct 13, 2024 00:00:00");
countdown.start();

// Uso do let para dar o querySelector nos botões
// Pegando os botões
let addHour = document.querySelector(".add-btn");
let removeHour = document.querySelector(".remove-btn");

// Adicionando eventos de clique com arrow functions
addHour.addEventListener("click", () => {
    countdown.addHour();
});

removeHour.addEventListener("click", () => {
    countdown.removeHour();
});

