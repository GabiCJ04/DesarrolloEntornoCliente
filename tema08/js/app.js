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
const resumen = document.getElementById("resumen");
const avisoResumen = document.getElementById("avisoResumen");

document.getElementById("verResumen").addEventListener("click", () => {
  resumen.replaceChildren();
  for (const [campo, valor] of new FormData(formulario)) {
    const elemento = document.createElement("li");
    elemento.className = "list-group-item text-break";
    elemento.textContent = `${campo}: ${valor || "(vacío)"}`;
    resumen.append(elemento);
  }
  avisoResumen.textContent = `Datos: ${resumen.childElementCount}. «Repite el correo» se omite porque no tiene atributo name.`;
  console.log("Resumen de inscripción actualizado");
});

formulario.addEventListener("reset", () => {
  resumen.replaceChildren();
  avisoResumen.textContent = "";
  valorNivel.defaultValue = nivel.defaultValue;
  contador.textContent = `${comentarios.defaultValue.length} de ${comentarios.maxLength} caracteres`;
});
