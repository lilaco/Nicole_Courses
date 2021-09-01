const clockTitle = document.querySelector(".js-clock");

function getDdayClock(){   
    const now = new Date();
    const xmas = new Date("December 25, 2021, 0:00:00");

    // 크리스마스와 현재 날짜의 차이를 밀리초의 값으로 가져오기. 
    const gap = xmas.getTime() - now.getTime();

    // Math.floor 메소드로 근접한 정수값 가져오기.
    const day = String(Math.floor(gap/(1000*60*60*24)));
    const hours = String(Math.floor((gap % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
    const minutes = String(Math.floor((gap % (1000*60*60))/(1000*60))).padStart(2,"0");
    const seconds = String(Math.floor((gap % (1000*60))/1000)).padStart(2,"0");

    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getDdayClock();
setInterval(getDdayClock, 1000);