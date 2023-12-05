let estadoHorno = "apagado",
  videoHornoActual,
  puertaHorno,
  puertaBloqueada = false;

window.onload = () => {
  videoHornoActual = document.getElementById("video-horno");
  puertaHorno = document.getElementById("puerta-horno");

  puertaHorno.onclick = () => {
    if (!puertaBloqueada) {
      if (estadoHorno == "tarta-lista") {
        estadoHorno = "retirar-lista";
      } else if (estadoHorno == "tarta-quemada") {
        estadoHorno = "retirar-quemada";
      }
    }
    avanzarAnimacion();
  };

  function avanzarAnimacion() {
    // Evaluar cada estado en el que se encuentra el horno
    // y ejecutar ciertas aciones en base a eso
    switch (estadoHorno) {
      case "apagado":
        // cuando el horno este apagado y el usuaruio toque la puerta, van a ocurrir las siguientes cosas:
        //bloquear la puerta para evitar interacciones inesperadas.
        bloquearPuerta(true);
        // reproducir el sonido de la puerta abriendose
        reproducirSonido("puerta", false);
        // mostrar la etiqueta video
        mostrarVideo();
        // reproducir el video inicial
        reproducirVideo("horno-abriendo-puerta");
        // cambiar el estado del horno a cocinando.
        estadoHorno = "cocinando";
        cuandoTermineAvanzarA("cocinando");
        console.log("Funcionando");

        break;
      case "cocinando":
        // reproducir el video de la tarta cocinandose
        reproducirVideo("horno-cocinando");
        // reproducir el sonido timer
        reproducirSonido("timer", true);
        // cambiar el estado a tarta-lista
        // cuandoTermineAvanzarA("cocinando");
        cuandoTermineAvanzarA("tarta-lista");
        break;
      case "tarta-lista":
        // frenar el sonido del timer
        detenerSonido();
        // desbloquear la puerta
        bloquearPuerta(false);
        // reproducir video de tarta lista
        reproducirVideo("horno-tarta-lista");
        // reproducirSonido campanita
        reproducirSonido("campanita", false);
        // loopear el video por cierto tiempo
        loopear(10000);
        // cambiar estado a quemada
        cuandoTermineAvanzarA("tarta-quemandose");
        break;

      case "tarta-quemandose":
        // frenar los sonidos
        detenerSonido();
        // bloquear nuevamnete la puerta
        bloquearPuerta(true);
        // reproucir el video de la tarta quemandose
        reproducirVideo("horno-tarta-quemandose");
        // avanzar al siguiente estado
        cuandoTermineAvanzarA("tarta-quemada");
        break;
      case "retirar-lista":
        // reproducir sonido puerta abriendose
        reproducirSonido("puerta-con-tarta", false);
        // volver a bloquear la puerta para que no se repita la animacion
        bloquearPuerta(false);
        // reproducir video sacando la tarta
        reproducirVideo("horno-retirar-lista");
        // reiniciar los estados
        reiniciar();
        break;
      case "retirar-quemada":
        reproducirSonido("puerta-con-tarta", false);
        bloquearPuerta(false);
        reproducirVideo("horno-retirar-quemada");
        reiniciar();
        break;
      case "tarta-quemada":
        bloquearPuerta(false);
        reproducirVideo("horno-tarta-quemada");
        loopear();
        break;
    }
  }

  let sonido;
  function reproducirSonido(nombreSonido, loopearSonido) {
    sonido = new Audio(`sound/${nombreSonido}.mp3`); // Crea un nuevo objeto con el  nombre que le pasemos por parametro
    sonido.play();
    sonido.loop = loopearSonido; //true o flase
    console.log("Funciona Reproducir Sonido");
  }

  function mostrarVideo() {
    videoHornoActual.classList.remove("hidden");
    console.log("Funciona mostrarVideo");
  }
  function ocultarVideo() {
    videoHornoActual.classList.add("hidden");
    console.log("Funciona ocultarVideo");
  }

  function reproducirVideo(nombreVideo) {
    videoHornoActual.src = `video/${nombreVideo}.webm`; // Cambia el src por el video que le pasemos
    videoHornoActual.play();
    console.log("Funciona reproducirVideo");
  }
  function actualizarEstadoA(estadoNuevo) {
    estadoHorno = estadoNuevo;
    console.log("Funciona actualizarEstadoA");
  }
  function cuandoTermineAvanzarA(estadoNuevo) {
    videoHornoActual.onended = () => {
      // cuando termine el videos ejecuta lo siguiente
      actualizarEstadoA(estadoNuevo);
      avanzarAnimacion();
      console.log("Funciona actualizarEstadoA");
    };
  }
  function bloquearPuerta(traba) {
    puertaBloqueada = traba;
    console.log("Funciona bloquearPuerta");
  }
  function detenerSonido() {
    sonido.pause();
    console.log("Funciona detenerSonido");
  }

  function loopear(tiempo) {
    videoHornoActual.loop = true;
    // si se definio un tiempo
    if (tiempo != undefined) {
      // crea un timer para desloopear
      setTimeout(() => {
        desloopear();
      }, tiempo); // que espe el tiempo que te pasaron
    }
    console.log("Funciona loopear");
  }
  function desloopear() {
    videoHornoActual.loop = false;
    console.log("Funciona desloopear");
  }
  function reiniciar() {
    desloopear();
    videoHornoActual.onended = () => {
      actualizarEstadoA("apagado");
      ocultarVideo();
      bloquearPuerta(false);
      rotarPerilla(0);
    };
  }

  // // Perilla
  // // Buscar la perilla y guardarla en una variable
  // const MAX_PLAYBACK_RATE = 16,
  //   MIN_PLAYBACK_RATE = 1;
  // let perillaHorno = document.getElementById("perilla-horno"),
  //   rotacionDeLaPerilla = 0;
  // // Detectar cuando el mouse esta sobre la perilla y se gira la ruedita.
  // perillaHorno.onmousewheel = (data) => {
  //   // Acelerar o desacelerar en la direccion que corresponda.
  //   if (estadoHorno == "cocinando" || estadoHorno == "tarta-lista") {
  //     // Saber en que direcion se gira la perilla
  //     cambiarTemperatura(data);
  //     // Rotar la perilla en la direccion que corresponda-
  //   }
  // };
  // function cambiarTemperatura(dataRecibida) {
  //   if (
  //     dataRecibida.deltaY < 0 &&
  //     videoHornoActual.playbackRate < MAX_PLAYBACK_RATE
  //   ) {
  //     rotarPerilla("derecha")(
  //       (videoHornoActual.playbackRate = videoHornoActual.playbackRate + 0.5)
  //     );
  //   } else if (
  //     dataRecibida.deltaY > 0 &&
  //     videoHornoActual.playbackRate > MIN_PLAYBACK_RATE
  //   ) {
  //     rotarPerilla("izquierda")(
  //       (videoHornoActual.playbackRate = videoHornoActual.playbackRate - 0.5)
  //     );
  //   }
  // }
  // function rotarPerilla(direccion) {
  //   if (direccion === "derecha") {
  //     rotacionDeLaPerilla += 2.5;
  //   } else if (direccion === "izquierda") {
  //     rotacionDeLaPerilla -= 2.5;
  //   } else {
  //     rotacionDeLaPerilla = direccion;
  //   }
  //   perillaHorno.style.transform = `rotate(${rotacionDeLaPerilla}deg)`;
  // }

  const MAX_PLAYBACK_RATE = 16,
    MIN_PLAYBACK_RATE = 1;
  let perillaHorno = document.getElementById("perilla-horno"),
    rotacionPerilla = 0;

  perillaHorno.onmousewheel = (e) => {
    if (estadoHorno == "cocinando" || estadoHorno == "tarta-lista") {
      cambiarTemperatura(e);
    }
  };

  function cambiarTemperatura(e) {
    if (e.deltaY < 0 && videoHornoActual.playbackRate < MAX_PLAYBACK_RATE) {
      rotarPerilla("derecha");
      videoHornoActual.playbackRate = videoHornoActual.playbackRate + 0.5;
    } else if (
      e.deltaY > 0 &&
      videoHornoActual.playbackRate > MIN_PLAYBACK_RATE
    ) {
      rotarPerilla("izquierda");
      videoHornoActual.playbackRate = videoHornoActual.playbackRate - 0.5;
    }
  }

  function rotarPerilla(direccion) {
    if (direccion === "derecha") {
      rotacionPerilla = rotacionPerilla + 2.5;
    } else if (direccion === "izquierda") {
      rotacionPerilla = rotacionPerilla - 2.5;
    } else {
      rotacionPerilla = direccion;
    }
    perillaHorno.style.transform = `rotate(${rotacionPerilla}deg)`;
  }
};
