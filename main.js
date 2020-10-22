const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;

const changeImage = () => {
  image = !image;
  title = !title;
  header.style.backgroundImage = image ? "url(test.jpg)" : "url(test1.png)";
  h1.textContent = title ? "Oczy" : "Pszczoly";
};
header.addEventListener("click", changeImage);
