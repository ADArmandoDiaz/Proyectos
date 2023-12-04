const menu = document.querySelector(".menu");
let line_top = document.querySelector(".line-1");
let line_centro = document.querySelector(".line-2");
let line_button = document.querySelector(".line-3");

menu.addEventListener("click", () => {
  line_top.classList.toggle("arriba");
  line_centro.classList.toggle("centro");
  line_button.classList.toggle("button");
});
