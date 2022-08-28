const startButton = document.querySelector('.button__start-timer');
const clearButton = document.querySelector('.button__clear-timer');
const stopButton = document.querySelector('.button__stop-timer');
const numberValue = document.querySelector('.time');

let sec = 0;
let interval;

function startTimer(){
    sec++
    numberValue.innerText = 0 + sec + ' sec';
}

let start = startButton.addEventListener('click', () =>{
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
});

let stop = stopButton.addEventListener('click', () =>{
    clearInterval(interval);
})

let clear = clearButton.addEventListener('click', () =>{
    sec = 0;
    numberValue.innerText = 0 + ' sec';
})