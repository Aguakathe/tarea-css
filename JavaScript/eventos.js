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