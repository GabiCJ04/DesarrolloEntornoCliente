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
const email = document.getElementById("email");
const email2 = document.getElementById("email2");
const errorEmail2 = document.getElementById("errorEmail2");

function mostrarErrorCorreo(mensaje) {
  email2.setCustomValidity(mensaje);
  errorEmail2.textContent = mensaje;
  email2.classList.toggle("is-invalid", mensaje !== "");
  if (mensaje) {
    email2.setAttribute("aria-invalid", "true");
  } else {
    email2.removeAttribute("aria-invalid");
  }
}

function comprobarCorreos() {
  const distintos = email2.value !== "" && email.value !== email2.value;
  mostrarErrorCorreo(distintos ? "Los dos correos no coinciden." : "");
}

email.addEventListener("input", comprobarCorreos);
email2.addEventListener("input", comprobarCorreos);

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
  mostrarErrorCorreo("");
  resumen.replaceChildren();
  avisoResumen.textContent = "";
  valorNivel.defaultValue = nivel.defaultValue;
  contador.textContent = `${comentarios.defaultValue.length} de ${comentarios.maxLength} caracteres`;
});
