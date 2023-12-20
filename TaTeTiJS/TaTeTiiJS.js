const celdas = document.querySelectorAll(".celda");
const textoEstado = document.querySelector("#textoEstado");
const reiniciarBtn = document.querySelector("#reiniciarBtn");
const audioGanador = document.querySelector("#audioGanador");
const gifGanador = document.querySelector("#gifGanador");
const condicionesGanador = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let opciones = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let juegoActivo = false;

iniciarJuego();

function iniciarJuego(){
    celdas.forEach(celda => celda.addEventListener("click", celdaClickada));
    reiniciarBtn.addEventListener("click", restartGame);
    textoEstado.textContent = `Turno de: ${jugadorActual}`;
    juegoActivo = true;
}
function celdaClickada(){
    const celdaIndex = this.getAttribute("cellIndex");

    if(opciones[celdaIndex] != "" || !juegoActivo){
        return;
    }

    updatecelda(this, celdaIndex);
    checkWinner();
}
function updatecelda(celda, index){
    opciones[index] = jugadorActual;
    celda.textContent = jugadorActual;
}
function changePlayer(){
    jugadorActual = (jugadorActual == "X") ? "O" : "X";
    textoEstado.textContent = `Turno de: ${jugadorActual}`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < condicionesGanador.length; i++){
        const condicion = condicionesGanador[i];
        const celdaA = opciones[condicion[0]];
        const celdaB = opciones[condicion[1]];
        const celdaC = opciones[condicion[2]];

        if(celdaA == "" || celdaB == "" || celdaC == ""){
            continue;
        }
        if(celdaA == celdaB && celdaB == celdaC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        textoEstado.textContent = `¡${jugadorActual} gana!`;
        juegoActivo = false;
        audioGanador.play();
        audioGanador.volume = 0.3;
        gifGanador.style.visibility = "visible";
    }
    else if(!opciones.includes("")){
        textoEstado.textContent = `¡Empate!`;
        juegoActivo = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    jugadorActual = "X";
    opciones = ["", "", "", "", "", "", "", "", ""];
    textoEstado.textContent = `Turno de: ${jugadorActual}`;
    celdas.forEach(celda => celda.textContent = "");
    juegoActivo = true;
    gifGanador.style.visibility = "hidden";
}