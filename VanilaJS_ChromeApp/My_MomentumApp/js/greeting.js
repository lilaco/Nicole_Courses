const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    // 로그인 폼에서 input태그로 입력된 value를 username에 저장.
    const username = loginInput.value;

    // LocalStorage에 username 값 저장하기. (key,value)
    localStorage.setItem("username", username);

    // showGreeting 실행
    showGreeting(username);

}

function showGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
        
}

const savedUsername = localStorage.getItem("username");

// localStorage에 
if(savedUsername === null){
    // 폼 보여주기
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // Greeting 보여주기.
    showGreeting(savedUsername);
}
