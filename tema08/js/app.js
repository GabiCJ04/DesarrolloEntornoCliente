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
const campos = formulario.querySelectorAll("input, select, textarea");
const OBLIGATORIOS = {
  nombre: "Escribe tu nombre y apellidos.",
  email: "Escribe tu correo electrónico.",
  email2: "Repite tu correo electrónico.",
  nacimiento: "Indica tu fecha de nacimiento.",
  modalidad: "Selecciona una modalidad.",
  taller: "Elige un taller de la tarde.",
  condiciones: "Acepta las condiciones para enviar la inscripción."
};

function mostrarError(campo, mensaje) {
  const bloque = campo.closest(".mb-3");
  const aviso = bloque.querySelector(".invalid-feedback");
  aviso.textContent = mensaje;
  aviso.classList.toggle("d-block", Boolean(mensaje));
  const controles = campo.type === "radio" ? bloque.querySelectorAll("input") : [campo];
  for (const control of controles) {
    control.classList.toggle("is-invalid", Boolean(mensaje));
    if (mensaje) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");
  }
}

function quitarError(campo) {
  mostrarError(campo, "");
}

function mensajeDe(campo) {
  const estado = campo.validity;
  if (estado.valueMissing) return OBLIGATORIOS[campo.name || campo.id];
  if (estado.customError) return campo.validationMessage;
  if (estado.typeMismatch) return "Escribe una dirección de correo válida.";
  if (estado.tooShort) return `Escribe al menos ${campo.minLength} caracteres.`;
  return campo.title || campo.validationMessage;
}

function comprobarCorreos() {
  const distintos = email2.value !== "" && email.value !== email2.value;
  email2.setCustomValidity(distintos ? "Los dos correos no coinciden." : "");
  if (distintos || email2.classList.contains("is-invalid")) {
    mostrarError(email2, email2.validity.valid ? "" : mensajeDe(email2));
  }
}

email.addEventListener("input", comprobarCorreos);
email2.addEventListener("input", comprobarCorreos);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  comprobarCorreos();
  let primero = null;
  for (const campo of e.target.querySelectorAll("input, select, textarea")) {
    if (campo.checkValidity()) {
      quitarError(campo);
    } else {
      mostrarError(campo, mensajeDe(campo));
      if (primero === null) primero = campo;
    }
  }
  if (primero) {
    console.log("Primer campo con error:", primero.id);
    primero.focus();
  } else {
    console.log("Inscripción validada");
    e.target.submit();
  }
});

for (const campo of campos) {
  campo.addEventListener("input", () => {
    if (campo.validity.valid) quitarError(campo);
  });
}

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
  email2.setCustomValidity("");
  for (const campo of campos) quitarError(campo);
  resumen.replaceChildren();
  avisoResumen.textContent = "";
  valorNivel.defaultValue = nivel.defaultValue;
  contador.textContent = `${comentarios.defaultValue.length} de ${comentarios.maxLength} caracteres`;
});
