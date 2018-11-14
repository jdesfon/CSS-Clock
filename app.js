var hour = document.getElementById('hour');
var min = document.getElementById('minute');
var second = document.getElementById('second');

window.setInterval(function() {
    hourRotation = -180 + (new Date().getHours() % 12) * 30;
    hour.style.transform = `rotate(${hourRotation}deg)`;
}, 1000);

window.setInterval(function() {
    minuteRotation = -180 + (new Date().getMinutes()) * 6;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
}, 1000);

window.setInterval(function() {
    secondRotation = -180 + (new Date().getSeconds()) * 6;
    second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);

