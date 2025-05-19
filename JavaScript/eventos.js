// Click para cambiar de color
document.getElementById("btnColor").addEventListener("click", function () {
  const box = document.getElementById("box1");
  box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightgray" : "lightblue";
});