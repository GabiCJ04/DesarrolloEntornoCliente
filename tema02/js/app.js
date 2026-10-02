// El saludo aparece para el usuario y deja una traza para quien desarrolla.
function saludar() {
  console.log("Saludar: saludo de Gabriel Cruz Jiménez.");
  alert("¡Hola! Soy Gabriel Cruz Jiménez.");
}

// Simula un fallo sin mostrar ventanas ni provocar una excepción.
function simularError() {
  console.error("Error simulado: no se ha podido completar la operación.");
}

// Muestra exactamente la información que proporciona el navegador.
function mostrarNavegador() {
  console.log(navigator.userAgent);
  console.warn("El userAgent contiene identificadores de compatibilidad; no identifica el motor de forma fiable.");
  alert(navigator.userAgent);
}
