var iniciar = document.getElementById('start')
var parar = document.getElementById('pause')
var resetar = document.getElementById('reset')

var horasNaTela = document.getElementById('horas')
var minutosNaTela = document.getElementById('minutos')
var segundosNaTela = document.getElementById('segundos')
var milissegundosNaTela = document.getElementById('milisSegundos')

let milisSegundos = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;

let cron;

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function timer() {
    if (milisSegundos += 60) {
        milisSegundos = 0;
        segundos++;
    }
    if (segundos == 60) {
        segundos = 0;
       minutos++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++
    }
    horasNaTela.innerHTML = (horas);
    minutosNaTela.innerHTML = (minutos);
    segundosNaTela.innerHTML = (segundos);
    milissegundosNaTela.innerHTML = (milisSegundos)
    console.log(horas)
}

function reset() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    horasNaTela.innerText = '00';
    minutosNaTela.innerText = '00';
    segundosNaTela.innerText = '00';
    milissegundosNaTela.innerHTML = '00';
}