const consulta = document.getElementById("consulta");
const datos = document.getElementById("datos");
const parametros = new URLSearchParams(location.search);

console.log("Campos recibidos por GET:", parametros.size);
consulta.textContent = location.search;

if (parametros.size === 0) {
  consulta.textContent = "No han llegado datos del formulario.";
  datos.closest("table").hidden = true;
}

for (const [campo, valor] of parametros) {
  const fila = document.createElement("tr");
  const nombreCampo = document.createElement("td");
  const valorCampo = document.createElement("td");
  nombreCampo.textContent = campo;
  valorCampo.textContent = valor;
  valorCampo.className = "text-break";
  fila.append(nombreCampo, valorCampo);
  datos.append(fila);
}
