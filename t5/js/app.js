/*
  Tarea 5 · DWEC · Gabriel Cruz Jiménez
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  const primero = document.getElementById("primero");
  const segundo = document.querySelector(".segundo");
  const parrafos = document.querySelectorAll("#contenido p");

  // El ejercicio 2 permitirá borrar párrafos: comprobar si siguen existiendo.
  if (primero !== null) {
    primero.textContent = "Texto modificado por JavaScript";
  }
  if (segundo !== null) {
    segundo.classList.add("bg-warning-subtle");
  }
  if (parrafos.length >= 3) {
    parrafos[2].classList.add("text-danger");
  }
  console.log("Ejercicio 1: cambios aplicados a los párrafos disponibles");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");
  // El número indica la posición que ocupará dentro del contenido.
  parrafo.textContent = "Párrafo nuevo " + (contenido.children.length + 1);
  contenido.append(parrafo);
  document.querySelector("#aviso2").classList.add("d-none");
  console.log("Ejercicio 2: añadido", parrafo.textContent);
}

function eliminarUltimo() {
  const ultimo = document.querySelector("#contenido").lastElementChild;
  const aviso = document.querySelector("#aviso2");
  if (ultimo === null) {
    aviso.classList.remove("d-none");
    console.log("Ejercicio 2: no quedan párrafos que eliminar");
  } else {
    ultimo.remove();
    aviso.classList.add("d-none");
    console.log("Ejercicio 2: eliminado el último párrafo");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  // Solo se asignan eventos a los párrafos existentes al pulsar el botón.
  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
      console.log("Ejercicio 3: el ratón entra en el párrafo");
    });
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
      console.log("Ejercicio 3: el ratón sale del párrafo");
    });
  }
  console.log("Ejercicio 3: resaltado activado en", parrafos.length, "párrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const primero = document.querySelector("#contenido p");
  const error = document.querySelector("#error4");
  if (texto === "") {
    error.textContent = "El campo está vacío.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: texto vacío");
  } else if (primero === null) {
    error.textContent = "Añade un párrafo antes de cambiar el texto.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: no hay párrafos");
  } else {
    primero.textContent = texto;
    error.classList.add("d-none");
    console.log("Ejercicio 4: texto literal actualizado", texto);
  }
}

function cambiarConHtml() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const primero = document.querySelector("#contenido p");
  const error = document.querySelector("#error4");
  if (texto === "") {
    error.textContent = "El campo está vacío.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: HTML vacío");
  } else if (primero === null) {
    error.textContent = "Añade un párrafo antes de cambiar el texto.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: no hay párrafos");
  } else {
    // Demostración de la tarea: innerHTML interpreta etiquetas, no texto literal.
    // No usar esta asignación con entradas de usuarios en una aplicación real.
    primero.innerHTML = texto;
    error.classList.add("d-none");
    console.log("Ejercicio 4: HTML interpretado", texto);
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const entrada = document.querySelector("#tareaInput");
  const texto = entrada.value.trim();
  const lista = document.querySelector("#listaTareas");
  const error = document.querySelector("#error5");
  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: tarea vacía");
  } else {
    const tarea = document.createElement("li");
    tarea.classList.add("list-group-item");
    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.classList.add("form-check-input", "me-2");
    casilla.setAttribute("aria-label", "Completar: " + texto);
    const descripcion = document.createElement("span");
    // El texto de la tarea nunca se interpreta como HTML.
    descripcion.textContent = texto;
    tarea.append(casilla, descripcion);
    lista.append(tarea);
    entrada.value = "";
    error.classList.add("d-none");
    console.log("Ejercicio 5: tarea añadida", texto);
  }
  document.querySelector("#totalTareas").textContent = lista.children.length;
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");
  if (marcadas.length === 0) {
    error.textContent = "Marca alguna tarea para borrar las completadas.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: ninguna tarea marcada");
  } else {
    for (const casilla of marcadas) {
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");
    console.log("Ejercicio 5: tareas eliminadas", marcadas.length);
  }
  document.querySelector("#totalTareas").textContent = document.querySelector("#listaTareas").children.length;
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
