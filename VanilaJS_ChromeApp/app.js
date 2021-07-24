const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

// function 에 event argument를 추가하여 event 를 컨트롤한다. (해당 argument의 명명은 관행으로 'event'라 한다. potato라 적어도 됨.)
function onLoginSubmit(event) {
    // 어떤 event의 기본행동이든지 발생되지 않도록 막는다.
    event.preventDefault();

    console.log(event);
}

// 위와 다르게 handleLinkClick function의 event는 PointerEvent이다. 
// event의 종류가 다양한다. 
function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    alert("clicked!!");
}

// submit event 가 발생할때 JS는 onLoginSubmit function 을 호출한다.
// addEventListener 안에 있는 함수는 직접 실행하지 않는다. 브라우저가 해주는 것이다. (onLoginSubmit(); no~no~)
// 브라우저는 function을 실행만 시켜주는게 아니라 event에 대한 정보도 담아준다.
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);