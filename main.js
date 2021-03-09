const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;

const changeImage = () => {
  image = !image;
  title = !title;
  header.style.backgroundImage = image ? "url(img_1.svg)" : "url(img_2.svg)";
  h1.textContent = title ? "eye" : "bee";
};
header.addEventListener("click", changeImage);
