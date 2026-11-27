const nivel = document.getElementById("nivel");
const valorNivel = document.getElementById("valorNivel");

nivel.addEventListener("input", () => {
  valorNivel.value = nivel.value;
});

const comentarios = document.getElementById("comentarios");
const contador = document.getElementById("contador");

comentarios.addEventListener("input", () => {
  contador.textContent = `${comentarios.value.length} de ${comentarios.maxLength} caracteres`;
});

const formulario = document.getElementById("inscripcion");

formulario.addEventListener("reset", () => {
  valorNivel.defaultValue = nivel.defaultValue;
  contador.textContent = `${comentarios.defaultValue.length} de ${comentarios.maxLength} caracteres`;
});
