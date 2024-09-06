// Utilização da classe para a Contagem
export default class Countdown{
    constructor(date){
        this.date = new Date(date).getTime();
    }

    start(){
        // Utilizando Arrow functions
        setInterval(() => {
            // Utilização das constantes
            const now = new Date().getTime();
            const distance = this.date - now;
        
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            // Uso do Operador Ternário
            document.getElementById("days").innerHTML = distance < 0 ? "00" : String(days).padStart(2, '0');
            document.getElementById("hours").innerHTML = distance < 0 ? "00" : String(hours).padStart(2, '0');
            document.getElementById("minutes").innerHTML = distance < 0 ? "00" : String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerHTML = distance < 0 ? "00" : String(seconds).padStart(2, '0');
        
        }, 1000);
    }

    addHour(){
        this.date += 1000 * 60 * 60;
    }

    removeHour(){
        const time = new Date();
        if(this.date - time.getTime() > 0){
            this.date -= 1000 * 60 * 60;
        }
    }
}