// Click para cambiar de color
document.getElementById("btnColor").addEventListener("click", function () {
  const box = document.getElementById("box1");
  box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightgray" : "lightblue";
});

const box2 = document.getElementById("box2");
const msgHover = document.getElementById("msgHover");

box2.addEventListener("mouseover", function () {
    msgHover.textContent = "¡Estás sobre la caja!";
});

box2.addEventListener("mouseout", function () {
    msgHover.textContent = "";
});

const inputTexto = document.getElementById("inputTexto");
const contador = document.getElementById("contador");

inputTexto.addEventListener("input", function () {
    contador.textContent = "Caracteres escritos: " + inputTexto.value.length;
});

// Ejemplo 4: Mostrar valor seleccionado (change)
const selectOpciones = document.getElementById("selectOpciones");
const opcionSeleccionada = document.getElementById("opcionSeleccionada");

selectOpciones.addEventListener("change", function () {
    const valor = selectOpciones.value;
    opcionSeleccionada.textContent = valor ? "Seleccionaste: " + valor : "";
});

// Ejemplo 5: Doble click para agrandar
const box3 = document.getElementById("box3");

box3.addEventListener("dblclick", function () {
    const isExpanded = box3.style.width === "200px";
    box3.style.width = isExpanded ? "100px" : "200px";
    box3.style.height = isExpanded ? "100px" : "200px";
});
