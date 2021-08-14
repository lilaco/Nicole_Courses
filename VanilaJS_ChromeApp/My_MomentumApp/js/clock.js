const clock = document.querySelector("#clock");

getClock();

function getClock(){
    // Date 라이브러리 불러오기
    const date = new Date();
    
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}:${minutes}:${seconds}`;

    // getClock을 1초마다 실행.
    setInterval(getClock,1000);
}
