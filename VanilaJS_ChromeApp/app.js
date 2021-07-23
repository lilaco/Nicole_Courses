const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    //classList.contains 는 selector 에서 파라미터값이 포함되어있는지 클래스를 확인한다.
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }

}

h1.addEventListener("click", handleTitleClick);