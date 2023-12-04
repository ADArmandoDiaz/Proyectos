const animacion = document.getElementById("barras");
var activacion = "denegada";
let line_top = document.querySelector(".barra-1");
let line_centro = document.querySelector(".barra-2");
let line_button = document.querySelector(".barra-3");
// animacion.addEventListener("click", () => {
//   if (activacion === "denegada") {
//     animacion.classList.add("play");
//     activacion = "concedida";
//     animacion.classList.remove("paused");
//     console.log(activacion);
//   } else if (activacion === "concedida") {
//     animacion.classList.remove("play");
//     activacion = "denegada";
//     animacion.classList.add("paused");
//     console.log(activacion);
//   } else if (onload) {
//     activacion = "denegada";
//     animacion.classList.add("paused");
//   }
// });

animacion.addEventListener("click", () => {
  line_top.classList.toggle("arriba");
  line_centro.classList.toggle("centro");
  line_button.classList.toggle("abajo");
});
