const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");   
const pauseBtn = document.querySelector("#pauseBtn");   
const resetBtn = document.querySelector("#resetBtn");   

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalID);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    ms = 0;
    timeDisplay.textContent = "00:00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    ms = Math.floor((elapsedTime / 10) % 100);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    ms = pad(ms);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${ms}`;

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : ("0" + unit);
    }
}