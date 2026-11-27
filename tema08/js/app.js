const nivel = document.getElementById("nivel");
const valorNivel = document.getElementById("valorNivel");

nivel.addEventListener("input", () => {
  valorNivel.value = nivel.value;
});
