function handleColorByResize(){
    const frameWidth = window.innerWidth;

    const PURPLE = "purple";
    const YELLOW = "yellow";
    const BLUE = "blue";

    // 2000 yellow , 1500 purple, 1000 blue
    if(1000 > frameWidth){
        document.body.classList.remove(PURPLE);
        document.body.classList.remove(YELLOW);
        document.body.classList.add(BLUE);
    } else if (1500 > frameWidth) {
        document.body.classList.remove(BLUE);
        document.body.classList.remove(YELLOW);
        document.body.classList.add(PURPLE);
    } else if (2000 > frameWidth) {
        document.body.classList.remove(PURPLE);
        document.body.classList.remove(BLUE);
        document.body.classList.add(YELLOW);
    }
}


window.addEventListener("resize", handleColorByResize);