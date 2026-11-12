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
 