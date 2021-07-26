const images = ["background_1.jpg","background_2.jpg","background_3.jpg","background_4.jpg","background_5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// Javascript에서 HTML을 생성하여 화면에 출력하기
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// body태그에 image 추가하기.
document.body.appendChild(bgImage);