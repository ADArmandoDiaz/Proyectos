var arrayOfSquare = [];

window.addEventListener("load", () => {
  for (let i = 1; i < 16; i++) {
    cuadro = `.p-${i}`;
    square = document.querySelector(cuadro);
    if (square) {
      arrayOfSquare.push(square);
    }
  }
  var rotate = 0;
  for (let i = 0; i < arrayOfSquare.length; i++) {
    let transformRotate = "rotate(" + String(rotate) + "deg)";
    arrayOfSquare[i].style.transform = transformRotate;
    rotate += 6;
  }
  console.log(arrayOfSquare);
});
