export default function(){
    gsap.from(".content", 1.2, {opacity: 0, y: 150, delay: 0.5});
    gsap.from(".logo", 1.2, {opacity: 0, x: -150, delay:0.5});
}