const boton = document.querySelector(".btn");
const contenedor = document.querySelector(".active");

boton.addEventListener("click", () => {
  contenedor.classList.toggle("active");
  boton.classList.toggle("desaparecer");
});
