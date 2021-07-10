document.onload = setTimer();

function setTimer() {}
var time = document.getElementById("time");
time = time.innerHTML.replace("s", "");
var mins = time / 60;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;

setTimeout(Decrement(), 1000);

function Decrement() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    document.getElementById("time").innerHTML = currentMinutes + ":" + currentSeconds;
    if (secs !== -1) setTimeout('Decrement()', 1000);
    if (secs === 0) document.getElementById("quiz").submit();;
}