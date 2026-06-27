let hourshand = document.querySelector(".div2");
let minutehand = document.querySelector(".div3");
let secondhand = document.querySelector(".div1");

function clock() {
    let now = new Date();

    let hrs = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();

    let hourDeg = (hrs % 12) * 30 + mins * 0.5;
    let minuteDeg = mins * 6 ;
    let secondDeg = sec * 6;

    hourshand.style.transform = `rotate(${hourDeg}deg)`;
    minutehand.style.transform = `rotate(${minuteDeg}deg)`;
    secondhand.style.transform = `rotate(${secondDeg}deg)`;
}

clock();
setInterval(clock, 1000);

