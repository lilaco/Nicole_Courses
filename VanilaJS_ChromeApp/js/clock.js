const clock = document.querySelector("h2#clock");

function getClock() {
    // Date 객체 생성
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
//getClock function을 매 1초(1000ms) 마다 실행
setInterval(getClock, 1000);