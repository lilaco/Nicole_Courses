const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

//sayHello function을 매 5초(5000ms) 마다 실행
setInterval(sayHello, 5000);