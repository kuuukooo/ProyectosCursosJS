const textoJugador = document.getElementById("textoJugador");
const textoComputadora = document.getElementById("textoComputadora");
const textoResultado = document.getElementById("textoResultado");
const botonesElección = document.querySelectorAll(".btnEleccion");

let jugador;
let computadora;
let resultado;

botonesElección.forEach(button => button.addEventListener("click", () => {

   jugador = button.textContent;
   TurnoComputadora(); 
   textoJugador.textContent = `Jugador: ${jugador}`;
   textoComputadora.textContent = `Computadora: ${computadora}`;
   textoResultado.textContent = Ganador();
}));

function TurnoComputadora(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
    case 1:
        computadora = "Piedra";
        break;
    case 2: 
        computadora = "Papel";
        break;
    case 3:
        computadora = "Tijeras";
        break;
    }
}

function Ganador(){
    if(jugador == computadora){
        return "¡Empate!";
    } else if(computadora == "Piedra") {
        return (jugador == "Papel") ? "¡Ganaste!" : "¡Perdiste!";
    } else if(computadora == "Papel") {
        return (jugador == "Tijeras") ? "¡Ganaste!" : "¡Perdiste!";
    } else if(computadora == "Tijeras") {
        return (jugador == "Piedra") ? "¡Ganaste!" : "¡Perdiste!";
    }
}
