const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");

// function 에 event argument를 추가하여 event 를 컨트롤한다. (해당 argument의 명명은 관행으로 'event'라 한다. potato라 적어도 됨.)
function onLoginSubmit(event) {
    // 어떤 event의 기본행동이든지 발생되지 않도록 막는다.
    event.preventDefault();

    console.log(event);
}

// submit event 가 발생할때 JS는 onLoginSubmit function 을 호출한다.
loginForm.addEventListener("submit", onLoginSubmit);