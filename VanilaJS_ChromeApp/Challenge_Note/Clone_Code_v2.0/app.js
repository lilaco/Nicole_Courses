// 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    console.dir(loginInput);
    console.log("clicked!" + loginInput.value);
    // We need to add validate system.
}

loginButton.addEventListener("click", onLoginBtnClick);