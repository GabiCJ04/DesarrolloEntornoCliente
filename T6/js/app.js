// Tarea 6 · DWEC · Gabriel Cruz Jiménez
// Objetos y arrays. Los resultados se crean con el DOM.

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// ============================================================

function comoTexto(lista) {
  console.log("comoTexto:", lista);
  return "[" + lista.join(", ") + "]";
}

// Crea una línea de resultado sin interpretar el texto como HTML.
function escribirLinea(salida, texto) {
  const linea = document.createElement("p");
  linea.classList.add("mb-1");
  linea.textContent = texto;
  salida.append(linea);
  console.log("escribirLinea:", texto);
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
    console.log("Ejercicio 1: presentarse", this);
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
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

  const frase = document.createElement("p");
  frase.classList.add("mt-2", "mb-0", "fst-italic");
  frase.textContent = estudiante.presentarse();
  salida.append(lista, frase);
  console.log("Ejercicio 1: ficha", estudiante);
}

function cumplirAnios() {
  estudiante.edad += 1;
  verFicha();
  console.log("Ejercicio 1: edad", estudiante.edad);
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
  console.log("Ejercicio 1: curso después de delete", estudiante.curso);
}


// ============================================================
// Ejercicio 2 · Colores
// push añade al final, pop quita el último y shift quita el primero.
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
  console.log("Ejercicio 2: colores", comoTexto(colores));
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
  console.log("Ejercicio 2: aviso", mensaje);
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
  if (colores.length === 0) {
    mostrarColores();
    avisar2("No quedan colores para quitar.");
    console.log("Ejercicio 2: pop sin colores");
    return;
  }

  const eliminado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: pop ha sacado", eliminado);
}

function quitarPrimero() {
  if (colores.length === 0) {
    mostrarColores();
    avisar2("No quedan colores para quitar.");
    console.log("Ejercicio 2: shift sin colores");
    return;
  }

  const eliminado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift ha sacado", eliminado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Cada producto tiene nombre, precio y categoría.
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// La misma función pinta el catálogo, una copia ordenada o una selección.
function pintarProductos(lista) {
  console.log("Ejercicio 3: pintar productos", lista);
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
  console.log("Ejercicio 3: catálogo completo", productos);
}

function ordenarPorPrecio() {
  // sort cambia el array sobre el que trabaja, por eso ordenamos una copia.
  const ordenados = [...productos];
  ordenados.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(ordenados);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro: " + ordenados.length + " productos.";
  console.log("Ejercicio 3: catálogo ordenado", ordenados);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €.";
  console.log("Ejercicio 3: productos de más de 50 €", caros);
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  console.log("Ejercicio 3: buscar producto", texto);

  if (texto === "") {
    pintarProductos([]);
    mensaje.textContent = "Escribe un nombre para buscar.";
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    pintarProductos([]);
    mensaje.textContent = "find devuelve undefined: no hay ningún producto con ese nombre.";
  } else {
    pintarProductos([encontrado]);
    mensaje.textContent = "Primer producto encontrado: " + encontrado.nombre + ".";
  }
  console.log("Ejercicio 3: resultado de find", encontrado);
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Gabriel",
  notas: [],
  anadirNota: function (nota) {
    console.log("Ejercicio 4: validar nota", nota);
    if (typeof nota === "number" && !Number.isNaN(nota) && nota >= 0 && nota <= 10) {
      this.notas.push(nota);
      return true;
    }
    return false;
  },
  media: function () {
    console.log("Ejercicio 4: calcular media", this.notas);
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota) {
      return total + nota;
    }, 0);
    return suma / this.notas.length;
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
  console.log("Ejercicio 4: mostrar notas", alumno.notas);
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const valor = casilla.value.trim();
  const error = document.querySelector("#error4");
  console.log("Ejercicio 4: añadir nota", valor);

  // Number("") es 0: la casilla vacía se comprueba antes de convertir.
  if (valor === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
    return;
  }

  const nota = Number(valor);
  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota tiene que ser un número entre 0 y 10.";
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
  mostrarNotas();
  console.log("Ejercicio 4: notas borradas", alumno.notas);
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
  escribirLinea(salida, "Dobles con map: " + comoTexto(dobles));
  escribirLinea(salida, "Original: " + comoTexto(numeros));
  console.log("Ejercicio 5: dobles", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  escribirLinea(salida, "Pares con filter: " + comoTexto(pares));
  escribirLinea(salida, "Original: " + comoTexto(numeros));
  console.log("Ejercicio 5: pares", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (total, numero) {
    return total + numero;
  }, 0);
  const salida = document.querySelector("#salida5");
  salida.textContent = "";
  escribirLinea(salida, "Suma con reduce: " + suma);
  escribirLinea(salida, "Original: " + comoTexto(numeros));
  console.log("Ejercicio 5: suma", suma);
}

function verCadena() {
  // El resultado de cada paso es la entrada del siguiente.
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
  escribirLinea(salida, "1. filter: " + comoTexto(pares));
  escribirLinea(salida, "2. map: " + comoTexto(dobles));
  escribirLinea(salida, "3. reduce: " + suma);
  escribirLinea(salida, "Original: " + comoTexto(numeros));
  console.log("Ejercicio 5: tres pasos", pares, dobles, suma);
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
  console.log("Ejercicio 6: ciudades", ciudades);
}

function verSlice() {
  const seleccion = ciudades.slice(2, 5);
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  escribirLinea(salida, "slice(2, 5) devuelve " + comoTexto(seleccion));
  escribirLinea(salida, "Siguen " + ciudades.length + " ciudades: slice no cambia el array.");
  console.log("Ejercicio 6: slice", seleccion, "Original:", ciudades);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  if (ciudades.length < 3) {
    escribirLinea(salida, "Quedan menos de tres ciudades. Pulsa Restaurar antes de usar splice.");
    console.log("Ejercicio 6: no se puede hacer splice", ciudades);
    return;
  }

  const eliminadas = ciudades.splice(2, 2);
  escribirLinea(salida, "splice(2, 2) devuelve " + comoTexto(eliminadas));
  escribirLinea(salida, "Quedan " + ciudades.length + " ciudades: splice cambia el array.");
  mostrarCiudades();
  console.log("Ejercicio 6: splice ha quitado", eliminadas);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  escribirLinea(salida, "Restauradas las " + ciudades.length + " ciudades originales.");
  console.log("Ejercicio 6: ciudades restauradas", ciudades);
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");
  salida.textContent = "";
  console.log("Ejercicio 6: buscar ciudad", nombre);
  if (nombre === "") {
    escribirLinea(salida, "Escribe el nombre exacto de una ciudad para buscar.");
    return;
  }

  const incluida = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);
  escribirLinea(salida, "Ciudad: " + nombre);
  escribirLinea(salida, "includes(): " + incluida);
  escribirLinea(salida, "indexOf(): " + posicion);
  console.log("Ejercicio 6: búsqueda", nombre, incluida, posicion);
}

mostrarCiudades();
