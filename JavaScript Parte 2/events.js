//Ejericio 1
const inputJutsu = document.getElementById("inputJutsu");
const teclaPresionada = document.getElementById("teclaPresionada");

inputJutsu.addEventListener("keydown", function (event) {
    teclaPresionada.textContent = `¡Activando jutsu con la tecla: ${event.key}!`;
});

// Ejercicio 2
const campoCorreo = document.getElementById("emailInput");
const textoAyuda = document.getElementById("ayudaTexto");

campoCorreo.addEventListener("focus", () => {
    textoAyuda.classList.remove("oculto");
    textoAyuda.classList.add("visible");
});

campoCorreo.addEventListener("blur", () => {
    textoAyuda.classList.remove("visible");
    textoAyuda.classList.add("oculto");
});

//Ejercicio 3
const cajaKurama = document.getElementById("kurama");

cajaKurama.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("El sello permanece intacto... Este no es el camino.🔒");
});



//Ejercicio 4
const box = document.getElementById("narutoBox");

box.addEventListener("mouseenter", function () {
    box.classList.add("modo-sabio");
});

box.addEventListener("mouseleave", function () {
    box.classList.remove("modo-sabio");
});



//Ejercicio 5
const kakashiInput = document.getElementById("kakashiInput");
  const mensaje = document.getElementById("mensajeKakashi");
  const imagen = document.getElementById("imgKakashi");

  kakashiInput.addEventListener("keyup", () => {
    const texto = kakashiInput.value.trim().toLowerCase();

    if (texto === "kakashi") {
      mensaje.textContent = "✅ ¡Correcto!";
      mensaje.style.color = "green";
      imagen.style.display = "block";

      //Scroll hacia la imagen
      imagen.scrollIntoView({ behavior: "smooth", block: "center" });

    } else if (texto === "") {
      mensaje.textContent = "";
      imagen.style.display = "none";
    } else {
      mensaje.textContent = "❌ Palabra incorrecta";
      mensaje.style.color = "red";
      imagen.style.display = "none";

      // Hacer scroll hacia el mensaje
      mensaje.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
