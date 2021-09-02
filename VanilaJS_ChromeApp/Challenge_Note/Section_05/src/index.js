const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
const button = document.querySelector("button");
const body = document.body;

// 2. background style을 제어하는 function 생성.
function changeOnBackgroundColor() {
  
  // * 오른쪽 왼쪽 색상을 랜덤으로 배열에서 가져오기.
  const choseLeftColor = colors[Math.floor(Math.random() * colors.length)];
  const choseRightColor = colors[Math.floor(Math.random() * colors.length)];

  // linear-gradient 속성을 이용하여 그라데이션 주기.
  body.style = `background: linear-gradient(to right, ${choseLeftColor}, ${choseRightColor})`;
}

// 1. click eventlistner 생성.
button.addEventListener("click", changeOnBackgroundColor);