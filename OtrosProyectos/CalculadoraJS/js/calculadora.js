window.addEventListener("load", () => {
  // Escuchamos cuando se carga el documento

  // Creanos dos constantes y guardamos los elementos que necesitamos
  const display = document.querySelector(".calculator-display");
  const keypadButtons = document.getElementsByClassName("keypads-buttons");

  // Creamos otra constantes para convertir el HTMLCOllection a Array
  const keypadsButtonsArray = Array.from(keypadButtons);
  //   console.log(keypadsButtonsArray);

  // Iteramos en este array de botones
  keypadsButtonsArray.forEach((button) => {
    // console.log(button);

    // A cada boto le agregamos un listener
    button.addEventListener("click", () => {
      calculadora(button, display);
    });
  });
});

function calculadora(button, display) {
  switch (button.innerHTML) {
    case "C":
      borrar(display);
      break;
    case "=":
      calcular(display);
      break;
    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display) {
  display.innerHTML = eval(display.innerHTML); // Tomar el string y resolverlo y guardarlos en el innnerHtml
}

function actualizar(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = "";
  }
  display.innerHTML += button.innerHTML;
}

function borrar(display) {
  display.innerHTML = 0;
}
