// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.

✅ The colors of the title should come from a color from the colors array.

✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
    //여기에 각 function object로 담기.
    
    // The mouse is here
    mouseEnter: function(){
        h2.style.color = colors[0];
        h2.innerText = "The Mouse is here!😃";
    },
    // The mouse is gone
    mouseLeave: function(){
        h2.style.color = colors[1];
        h2.innerText = "The Mouse is gone!🤗";
    },
    // resized
    resize: function(){
        h2.style.color = colors[2];
        h2.innerText = "You just resized!😉";
    },
    //right click -> window.body
    rightClick: function(){
        h2.style.color = colors[4];
        h2.innerText = "That was a right click!😎";
    },
};

const h2 = document.querySelector("h2");
console.log(h2);

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave); 

//resize, right click은 window에서 eventListener를 등록한다.
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);