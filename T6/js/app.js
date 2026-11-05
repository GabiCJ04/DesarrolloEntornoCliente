/*
  Tarea 6 · DWEC · Gabriel Cruz Jiménez
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Gabriel",
  apellidos: "Cruz Jiménez",
  edad: 22,
  curso: "2.º DAW",
  presentarse: function () {
    const frase = "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
    console.log("Presentación:", frase);
    return frase;
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const lista = document.createElement("ul");
  lista.classList.add("list-group");
  const claves = ["nombre", "apellidos", "edad", "curso"];

  claves.forEach(function (clave) {
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = clave + ": " + estudiante[clave];
    lista.append(elemento);
  });

  const presentacion = document.createElement("p");
  presentacion.classList.add("mt-2", "mb-0", "fst-italic");
  presentacion.textContent = estudiante.presentarse();
  salida.append(lista, presentacion);
  console.log("Ficha del estudiante:", estudiante);
}

function cumplirAnios() {
  estudiante.edad++;
  console.log("Edad después del cumpleaños:", estudiante.edad);
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  console.log("Curso después de delete:", estudiante.curso);
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
  console.log("Colores y total:", colores, colores.length);
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
  console.log("Aviso de colores:", mensaje);
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  console.log("Quitar el último color");
  if (colores.length === 0) {
    mostrarColores();
    avisar2("La lista está vacía. Añade un color primero.");
    return;
  }

  const color = colores.pop();
  console.log("Color que ha salido con pop:", color);
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
}

function quitarPrimero() {
  console.log("Quitar el primer color");
  if (colores.length === 0) {
    mostrarColores();
    avisar2("La lista está vacía. Añade un color primero.");
    return;
  }

  const color = colores.shift();
  console.log("Color que ha salido con shift:", color);
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  console.log("Pintar productos:", lista);
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos.";
  console.log("Catálogo completo:", productos);
}

function ordenarPorPrecio() {
  // sort modifica el array: se ordena una copia para conservar productos.
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro: " + copia.length + " productos.";
  console.log("Productos ordenados:", copia);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €.";
  console.log("Productos de más de 50 €:", caros);
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  console.log("Buscar producto:", texto);
  if (texto === "") {
    mensaje.textContent = "Escribe un nombre para buscar.";
    pintarProductos([]);
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });
  console.log("Resultado de find:", encontrado);
  if (encontrado === undefined) {
    mensaje.textContent = "find devuelve undefined: no se ha encontrado ningún producto.";
    pintarProductos([]);
  } else {
    mensaje.textContent = "Primer producto encontrado: " + encontrado.nombre + ".";
    pintarProductos([encontrado]);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Gabriel",
  notas: [],
  anadirNota: function (nota) {
    console.log("Validar nota:", nota);
    if (typeof nota === "number" && !Number.isNaN(nota) && nota >= 0 && nota <= 10) {
      this.notas.push(nota);
      return true;
    }
    return false;
  },
  media: function () {
    console.log("Calcular media de:", this.notas);
    if (this.notas.length === 0) {
      return 0;
    }
    const total = this.notas.reduce(function (suma, nota) {
      return suma + nota;
    }, 0);
    return total / this.notas.length;
  }
};

function mostrarNotas() {
  const salida = document.querySelector("#notas");
  salida.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1", "mb-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    salida.append(badge);
  });

  const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }
  console.log("Mostrar notas:", alumno.notas);
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const valor = casilla.value.trim();
  const error = document.querySelector("#error4");
  console.log("Añadir nota escrita:", valor);

  // Se comprueba primero porque Number("") devuelve 0.
  if (valor === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
    return;
  }

  const nota = Number(valor);
  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  console.log("Borrar todas las notas");
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.classList.add("mb-1");
  resultado.textContent = "Dobles: " + comoTexto(dobles);
  const original = document.createElement("p");
  original.classList.add("mb-0");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(resultado, original);
  console.log("Dobles con map:", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.classList.add("mb-1");
  resultado.textContent = "Pares: " + comoTexto(pares);
  const original = document.createElement("p");
  original.classList.add("mb-0");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(resultado, original);
  console.log("Pares con filter:", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (total, numero) {
    return total + numero;
  }, 0);
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.classList.add("mb-1");
  resultado.textContent = "Suma: " + suma;
  const original = document.createElement("p");
  original.classList.add("mb-0");
  original.textContent = "Original: " + comoTexto(numeros);
  salida.append(resultado, original);
  console.log("Suma con reduce:", suma);
}

function verCadena() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  const dobles = pares.map(function (numero) {
    return numero * 2;
  });
  const suma = dobles.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  const lineas = [
    "1. filter: " + comoTexto(pares),
    "2. map: " + comoTexto(dobles),
    "3. reduce: " + suma,
    "Original: " + comoTexto(numeros)
  ];
  lineas.forEach(function (texto) {
    const parrafo = document.createElement("p");
    parrafo.classList.add("mb-1");
    parrafo.textContent = texto;
    salida.append(parrafo);
  });
  console.log("Filter, map y reduce:", pares, dobles, suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const salida = document.querySelector("#ciudades");
  salida.textContent = "";
  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-light", "border", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    salida.append(badge);
  });
  console.log("Ciudades con sus posiciones:", ciudades);
}

function verSlice() {
  const seleccion = ciudades.slice(2, 5);
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  const resultado = document.createElement("p");
  resultado.classList.add("mb-1");
  resultado.textContent = "slice(2, 5) devuelve " + comoTexto(seleccion);
  const cantidad = document.createElement("p");
  cantidad.classList.add("mb-0");
  cantidad.textContent = "Siguen " + ciudades.length + " ciudades: el array no ha cambiado.";
  salida.append(resultado, cantidad);
  console.log("Slice:", seleccion, "Ciudades:", ciudades);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  console.log("Hacer splice en:", ciudades);
  if (ciudades.length < 3) {
    const aviso = document.createElement("p");
    aviso.classList.add("mb-0");
    aviso.textContent = "Quedan menos de tres ciudades. Pulsa Restaurar para continuar.";
    salida.append(aviso);
    return;
  }

  const eliminadas = ciudades.splice(2, 2);
  const resultado = document.createElement("p");
  resultado.classList.add("mb-1");
  resultado.textContent = "splice(2, 2) devuelve " + comoTexto(eliminadas);
  const cantidad = document.createElement("p");
  cantidad.classList.add("mb-0");
  cantidad.textContent = "Quedan " + ciudades.length + " ciudades: el array sí ha cambiado.";
  salida.append(resultado, cantidad);
  mostrarCiudades();
  console.log("Ciudades eliminadas:", eliminadas);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  const mensaje = document.createElement("p");
  mensaje.classList.add("mb-0");
  mensaje.textContent = "Restauradas las " + ciudades.length + " ciudades originales.";
  salida.append(mensaje);
  console.log("Ciudades restauradas:", ciudades);
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  console.log("Buscar ciudad:", nombre);
  if (nombre === "") {
    const aviso = document.createElement("p");
    aviso.classList.add("mb-0");
    aviso.textContent = "Escribe el nombre exacto de una ciudad.";
    salida.append(aviso);
    return;
  }

  const incluida = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);
  const lineas = [
    "Ciudad: " + nombre,
    "includes(): " + incluida,
    "indexOf(): " + posicion
  ];
  lineas.forEach(function (texto) {
    const parrafo = document.createElement("p");
    parrafo.classList.add("mb-1");
    parrafo.textContent = texto;
    salida.append(parrafo);
  });
  console.log("Resultado de la búsqueda:", incluida, posicion);
}

mostrarCiudades();
