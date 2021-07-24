const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 String만 포함된 변수는 대문자로 표기하고 String을 저장하고 싶을 때 사용.
const HIDDEN_CLASSNAME = "hidden";

// function 에 event argument를 추가하여 event 를 컨트롤한다. (해당 argument의 명명은 관행으로 'event'라 한다. potato라 적어도 됨.)
function onLoginSubmit(event) {
    // 어떤 event의 기본행동이든지 발생되지 않도록 막는다.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    // localStorage에 username 값을 저장. (key, value)
    localStorage.setItem("username", username);
    
    // 취향차이 입니다.(니꼬가 선호하는 방법 ${변수}와 ``(백틱)사용에 주의할 것)
    greeting.innerText = `Hello ${username}`;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit event 가 발생할때 JS는 onLoginSubmit function 을 호출한다.
// addEventListener 안에 있는 함수는 직접 실행하지 않는다. 브라우저가 해주는 것이다. (onLoginSubmit(); no~no~)
// 브라우저는 function을 실행만 시켜주는게 아니라 event에 대한 정보도 담아준다.
loginForm.addEventListener("submit", onLoginSubmit);