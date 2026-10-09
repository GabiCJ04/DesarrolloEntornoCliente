// Tarea 3 · Gabriel Cruz Jiménez
// Las predicciones son propuestas para revisar antes de la entrega.

console.log("app.js cargado: pulsa Ejecutar en cada ejercicio");

function ejercicio1() {
  console.log("--- Ejercicio 1 · Gabriel Cruz Jiménez ---");

  const puntos = 20;
  const nombre = "Gabriel";
  const matriculado = true;
  const datoVacio = null;
  let nota;
  const numeroGrande = 10n;

  console.log("puntos =", puntos, "tipo:", typeof puntos);
  console.log("nombre =", nombre, "tipo:", typeof nombre);
  console.log("matriculado =", matriculado, "tipo:", typeof matriculado);
  console.log("datoVacio =", datoVacio, "tipo:", typeof datoVacio);
  console.log("nota =", nota, "tipo:", typeof nota);
  console.log("numeroGrande =", numeroGrande, "tipo:", typeof numeroGrande);

  // La nota no tenía valor. Ahora le doy uno de ejemplo.
  nota = 7;
  console.log("nota después =", nota, "tipo:", typeof nota);
}

function ejercicio2() {
  console.log("--- Ejercicio 2 · Gabriel Cruz Jiménez ---");

  const texto = String(123); // Espero "123", tipo string.
  console.log('String(123) →', texto, typeof texto);

  const numero = Number("123"); // Espero 123, tipo number.
  console.log('Number("123") →', numero, typeof numero);

  const numeroNoValido = Number("12abc"); // Espero NaN, tipo number.
  console.log('Number("12abc") →', numeroNoValido, typeof numeroNoValido);

  const cadenaVacia = Number(""); // Espero 0, tipo number.
  console.log('Number("") →', cadenaVacia, typeof cadenaVacia);

  const verdadero = Number(true); // Espero 1, tipo number.
  console.log('Number(true) →', verdadero, typeof verdadero);

  const cero = Boolean(0); // Espero false, tipo boolean.
  console.log('Boolean(0) →', cero, typeof cero);

  const textoConValor = Boolean("texto"); // Espero true, tipo boolean.
  console.log('Boolean("texto") →', textoConValor, typeof textoConValor);

  const textoVacio = Boolean(""); // Espero false, tipo boolean.
  console.log('Boolean("") →', textoVacio, typeof textoVacio);
}

function ejercicio3() {
  console.log("--- Ejercicio 3 · Gabriel Cruz Jiménez ---");

  console.log('"5" - 2 →', "5" - 2); // Espero 3.
  console.log('"5" + 2 →', "5" + 2); // Espero "52".
  console.log('"8" * 2 →', "8" * 2); // Espero 16.
  console.log('true + 2 →', true + 2); // Espero 3.
  console.log('"12" - 4 →', "12" - 4); // Espero 8.
  console.log('"Nota: " + 7 →', "Nota: " + 7); // Espero "Nota: 7".

  // Uso == solo aquí para comparar su resultado con ===.
  console.log('5 == "5" →', 5 == "5"); // Espero true.
  console.log('5 === "5" →', 5 === "5"); // Espero false.
  console.log('0 == false →', 0 == false); // Espero true.
  console.log('0 === false →', 0 === false); // Espero false.
  console.log('null == undefined →', null == undefined); // Espero true.
  console.log('null === undefined →', null === undefined); // Espero false.
}

function ejercicio4() {
  console.log("--- Ejercicio 4 · Gabriel Cruz Jiménez ---");

  const nombre = "Gabriel Cruz Jiménez";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2.º";
  const aficion = "escuchar música";

  // Horas de ejemplo para practicar cómo cambia una variable.
  let horasEstudio = 3;
  horasEstudio += 2;

  const ficha = `Soy ${nombre}. Estudio ${curso} de ${ciclo}. Me gusta ${aficion}. Esta semana llevo ${horasEstudio} horas de estudio.`;
  alert(ficha);
  console.log(ficha);

  const fichaConMas = "Soy " + nombre + ". Estudio " + curso + " de " + ciclo + ". Me gusta " + aficion + ". Esta semana llevo " + horasEstudio + " horas de estudio.";
  console.log(fichaConMas);
  console.log("¿Los mensajes son iguales?", ficha === fichaConMas);
}

