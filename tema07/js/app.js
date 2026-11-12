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

