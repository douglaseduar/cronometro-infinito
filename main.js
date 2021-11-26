if(!localStorage.getItem("hora")){
    hora = '00';
    minuto = '00';
    segundo = '00';
    localStorage.setItem('hora', hora);
    localStorage.setItem('minuto', minuto);
    localStorage.setItem('segundo', segundo);
}else{
    hora = localStorage.getItem("hora");
    minuto = localStorage.getItem("minuto");
    segundo = localStorage.getItem("segundo");
}
document.getElementById('hour').innerText = hora;
document.getElementById('minute').innerText = minuto;
document.getElementById('second').innerText = segundo;

"use strict";

let hour = hora;
let minute = minuto;
let second = segundo;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();

function start() {
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
  auxhora = document.getElementById('hour').innerText;
  auxminuto = document.getElementById('minute').innerText;
  auxsegundo = document.getElementById('second').innerText;
  localStorage.setItem('hora', auxhora);
  localStorage.setItem('minuto', auxminuto);
  localStorage.setItem('segundo', auxsegundo);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = hour;
  document.getElementById('minute').innerText = minute;
  document.getElementById('second').innerText = second;
  document.getElementById('millisecond').innerText = millisecond;
}

window.onbeforeunload = function () {
    pause();
    };