const image = "momonoke.jpg";

const bgImage = document.createElement("img");

bgImage.src = `images/${image}`;

document.body.style.backgroundImage = `url(images/${image})`;