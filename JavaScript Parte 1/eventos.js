// Ejercicio 1
const btnMotivar = document.getElementById("btnMotivar");
const fraseMotivadora = document.getElementById("fraseMotivadora");

btnMotivar.addEventListener("click", function () {
    fraseMotivadora.textContent = "¡El trabajo duro derrota al talento natural! 💪";
});

// Ejercicio 2
const imagen = document.getElementById("imagenHover");

imagen.addEventListener("mouseover", () => {
    imagen.src = "/img/sarada-galeria.jpg";
});

imagen.addEventListener("mouseout", () => {
    imagen.src = "/img/borut-galeria.jpg";
});


// Ejercicio 3
const inputTexto = document.getElementById("inputTexto");
const contador = document.getElementById("contador");

inputTexto.addEventListener("input", function () {
    contador.textContent = "Longitud del hechizo: " + inputTexto.value.length;
});

// Ejercicio 4
const personajeNaruto = document.getElementById("personajeNaruto");
const mensajePersonaje = document.getElementById("mensajePersonaje");

personajeNaruto.addEventListener("change", () => {
    const frase = personajeNaruto.value;
    mensajePersonaje.textContent = frase ? "Eres: " + frase : "";
});

// Ejercicio 5
const chakraBox = document.getElementById("chakraBox");
const mensajeChakra = document.getElementById("mensajeChakra");

chakraBox.addEventListener("dblclick", () => {
    chakraBox.style.transform = "scale(1.5)";
    chakraBox.style.transition = "transform 0.5s";
    mensajeChakra.textContent = "¡Has liberado tu chakra interior! 🌀🔥";
    setTimeout(() => {
        chakraBox.style.transform = "scale(1)";
    }, 1000);
});