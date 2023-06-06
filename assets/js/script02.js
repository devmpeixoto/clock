const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const clockElement = setInterval(function () {
    let dateToday = new Date();
    let horas = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let segundos = dateToday.getSeconds();

    if (horas < 10) horas = `0${horas}`;
    if (minutos < 10) minutos = `0${minutos}`;
    if (minutos < 10) minutos = `0${minutos}`;

    hoursElement.textContent = horas;
    minutesElement.textContent = minutos;
    secondsElement.textContent = segundos;
})