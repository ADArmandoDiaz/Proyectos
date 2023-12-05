// console.log(123);
var estadoLicuadora = "off";
var licuadora = document.getElementById("blender");
var sonidoDeLicuadora = document.getElementById("blender-sound");
var sonidoDeBotonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
  if (estadoLicuadora === "off") {
    estadoLicuadora = "on";
    licuadora.classList.add("active");
    hacerBrrBrr();
    console.log("Me prendiste");
  } else {
    estadoLicuadora = "off";
    console.log("Me apagaste");
    hacerBrrBrr();
    licuadora.classList.remove("active");
  }
}

function hacerBrrBrr() {
  if (sonidoDeLicuadora.paused) {
    sonidoDeLicuadora.play();
    sonidoDeBotonLicuadora.play();
  } else {
    sonidoDeBotonLicuadora.play();
    sonidoDeBotonLicuadora.pause();
    sonidoDeLicuadora.currenTime = 0;
  }
}
