// Ejercicio 1
const btnMotivar = document.getElementById("btnMotivar");
const fraseMotivadora = document.getElementById("fraseMotivadora");

// Arreglo de frases motivadoras de Rock Lee
const frasesRockLee = [
    "¡El trabajo duro derrota al talento natural! 💪",
    "¡Un verdadero ninja nunca se rinde! 🍃",
    "¡Seguiré entrenando hasta que no pueda moverme! 🔥",
    "¡No importa cuántas veces caigas, lo importante es levantarte! 🥋",
    "¡El poder de la juventud está en el corazón! 💚",
    "¡Mi camino del ninja es no rendirme jamás! ✊",
    "¡Convertiré mis sueños en realidad con esfuerzo! 🌟",
    "¡Mientras tenga brazos y piernas, seguiré luchando! 🧠"
];

btnMotivar.addEventListener("click", function () {
    const aleatoria = frasesRockLee[Math.floor(Math.random() * frasesRockLee.length)];
    fraseMotivadora.textContent = aleatoria;
    fraseMotivadora.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Ejercicio 2
const imagen = document.getElementById("imagenHover");
const msjHover = document.getElementById("msjHover");

imagen.addEventListener("mouseover", () => {
    imagen.src = "/img/sarada-galeria.jpg";
    msjHover.textContent = "Estás viendo a SARADA"
    
});

imagen.addEventListener("mouseout", () => {
    imagen.src = "/img/borut-galeria.jpg";
    msjHover.textContent = "Estás viendo a BORUTO"
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