function pintarLista(id, lineas) {
  console.log("Pintar lista", id, lineas);
  const salida = document.getElementById(id);
  salida.textContent = "";
  const lista = document.createElement("ul");
  lista.classList.add("list-group");
  lineas.forEach(linea => {
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = linea;
    lista.append(elemento);
  });
  salida.append(lista);
}

function formatearEuros(valor){
    console.log("Formatear euros", valor);
    return valor.toFixed(2).replace(".", ",") + "€";
}

function mostrarError(id, mensaje) {
    console.log("Validación", id, mensaje);
    const error = document.getElementById(id);
    error.textContent = mensaje;
    error.classList.toggle("d-none", mensaje === "");
}

//1
function calcularPrecio(base, iva = 21, descuento = 0) {
  console.log("Calcular precio", base, iva, descuento);
  const subtotal = base - base * descuento / 100;
  return subtotal + subtotal * iva / 100;
}

function mostrarPrecio() {
  console.log("Mostrar precio");
  const campoBase = document.querySelector("#base");
  const campoDescuento = document.querySelector("#descuento");
  const base = Number(campoBase.value);
  const iva = Number(document.querySelector("#iva").value);
  const descuento = Number(campoDescuento.value);
  document.querySelector("#salida1").textContent = "";
  if (campoBase.value === "" || !campoBase.validity.valid) {
    mostrarError("error1", "Introduce una base de cero euros o más.");
    return;
  }
  if (!campoDescuento.validity.valid) {
    mostrarError("error1", "El descuento debe estar entre 0 y 100.");
    return;
  }
  mostrarError("error1", "");
  const total = campoDescuento.value === "" ? calcularPrecio(base, iva) : calcularPrecio(base, iva, descuento);
  const rebaja = base * descuento / 100;
  pintarLista("salida1", ["Base: " + formatearEuros(base), "Descuento: " + formatearEuros(rebaja),
    "IVA (" + iva + " %): " + formatearEuros((base - rebaja) * iva / 100), "Total: " + formatearEuros(total)]);
}


//2 
const peliculas = [
  { titulo: "Origen", anio: 2010, minutos: 148 },
  { titulo: "Regreso al futuro", anio: 1985, minutos: 116 },
  { titulo: "Coco", anio: 2017, minutos: 105 },
  { titulo: "Alien", anio: 1979, minutos: 117 }
];

function pintarPeliculas(mensaje, lineas) {
  console.log("Películas", mensaje);
  document.querySelector("#mensaje2").textContent = mensaje;
  pintarLista("salida2", lineas);
}

function verTitulos() {
  console.log("Títulos");
  pintarPeliculas("Títulos del catálogo", peliculas.map(p => p.titulo));
}

function verLargas() {
  console.log("Más de dos horas");
  const largas = peliculas.filter(p => p.minutos > 120);
  pintarPeliculas("Más de dos horas", largas.map(p => p.titulo + " · " + p.minutos + " min"));
}

function ordenarPorAnio() {
  console.log("Ordenar por año");
  const ordenadas = peliculas.slice().sort((a, b) => a.anio - b.anio);
  pintarPeliculas("De más antigua a más reciente", ordenadas.map(p => p.anio + " · " + p.titulo));
}

function verDuracion() {
  console.log("Duración total");
  const minutos = peliculas.reduce((suma, p) => suma + p.minutos, 0);
  pintarPeliculas("Duración total", [minutos + " minutos"]);
}

function buscarAntigua() {
  console.log("Primera película anterior a 1990");
  const pelicula = peliculas.find(p => p.anio < 1990);
  if (pelicula === undefined) {
    pintarPeliculas("No hay películas anteriores a 1990.", []);
    return;
  }
  pintarPeliculas("Primera anterior a 1990", [pelicula.titulo + " · " + pelicula.anio]);
}

//3
const numeros = [-3, -1, 0, 2, 4];

function transformar(lista, operacion) {
  console.log("Transformar", lista);
  const resultado = [];
  for (const numero of lista) {
    resultado.push(operacion(numero));
  }
  return resultado;
}

function comparar(operacion) {
  console.log("Comparar con map");
  pintarLista("salida3", ["transformar: " + transformar(numeros, operacion).join(", "),
    "map: " + numeros.map(n => operacion(n)).join(", "), "Original: " + numeros.join(", ")]);
}

function verDoble() {
  console.log("Doble");
  comparar(n => n * 2);
}

function verCuadrado() {
  console.log("Cuadrado");
  comparar(n => n * n);
}

function verAbsoluto() {
  console.log("Valor absoluto");
  comparar(Math.abs);
}

//4
function crearContador(paso = 1) {
  console.log("Crear contador", paso);
  let cuenta = 0;
  return function () {
    cuenta += paso;
    console.log("Cuenta", cuenta);
    return cuenta;
  };
}

const contadorUno = crearContador();
const contadorCinco = crearContador(5);

function sumarUno() {
  console.log("Sumar uno");
  document.querySelector("#cuenta1").textContent = contadorUno();
}

function sumarCinco() {
  console.log("Sumar cinco");
  document.querySelector("#cuenta5").textContent = contadorCinco();
}

//5
class Alumno {
  constructor(nombre, curso) {
    console.log("Crear alumno", nombre, curso);
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    console.log("Añadir nota", nota);
    if (!Number.isFinite(nota) || nota < 0 || nota > 10) return false;
    this.notas.push(nota);
    return true;
  }

  media() {
    console.log("Media", this.nombre);
    if (this.notas.length === 0) return 0;
    return this.notas.reduce((suma, nota) => suma + nota, 0) / this.notas.length;
  }

  presentarse() {
    console.log("Presentación", this.nombre);
    return this.nombre + ", de " + this.curso;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    console.log("Empresa", empresa);
    this.empresa = empresa;
  }

  presentarse() {
    console.log("Presentación en prácticas", this.nombre);
    return super.presentarse() + ", en prácticas en " + this.empresa;
  }
}

const lucia = new Alumno("Lucía Martín", "2.º DAW");
lucia.anadirNota(7);
lucia.anadirNota(9);
const gabriel = new AlumnoFCT("Gabriel Cruz Jiménez", "2.º DAW", "Anaisoft");
gabriel.anadirNota(8);
gabriel.anadirNota(9);
const alumnos = [lucia, gabriel];

function pintarAlumnos() {
  console.log("Pintar alumnos", alumnos.length);
  pintarLista("salida5", alumnos.map(a => a.presentarse() + " · Notas: " +
    (a.notas.join(", ") || "sin notas") + " · Media: " + a.media().toFixed(2)));
}

function crearAlumno() {
  console.log("Leer alumno");
  const nombre = document.querySelector("#nombre").value.trim();
  const curso = document.querySelector("#curso").value.trim() || "2.º DAW";
  const empresa = document.querySelector("#empresa").value.trim();
  const texto = document.querySelector("#notas").value.trim();
  const partes = texto === "" ? [] : texto.split(",");
  const notas = partes.map(parte => Number(parte.trim()));
  if (nombre === "" || partes.some(p => p.trim() === "") ||
      notas.some(n => !Number.isFinite(n) || n < 0 || n > 10)) {
    mostrarError("error5", "Escribe un nombre y revisa las notas. Usa valores de 0 a 10 separados por comas.");
    return;
  }
  mostrarError("error5", "");
  const alumno = empresa === "" ? new Alumno(nombre, curso) : new AlumnoFCT(nombre, curso, empresa);
  notas.forEach(nota => alumno.anadirNota(nota));
  alumnos.push(alumno);
  pintarAlumnos();
}

pintarAlumnos();