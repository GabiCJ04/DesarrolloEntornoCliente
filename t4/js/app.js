// Tarea 4 · DWEC · Gabriel Cruz Jiménez
// Operadores, comparaciones y bucles en JavaScript.

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;

function leerOperandos(operacion) {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn(`${operacion}: falta algún número`);
    return null;
  }

  return { n1, n2 };
}

function sumar() {
  const numeros = leerOperandos("Sumar");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  const resultado = n1 + n2;
  mostrar(`${n1} + ${n2} = ${resultado}`);
  console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
}

function restar() {
  const numeros = leerOperandos("Restar");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  const resultado = n1 - n2;
  mostrar(`${n1} - ${n2} = ${resultado}`);
  console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
}

function multiplicar() {
  const numeros = leerOperandos("Multiplicar");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  const resultado = n1 * n2;
  mostrar(`${n1} × ${n2} = ${resultado}`);
  console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
}

function dividir() {
  const numeros = leerOperandos("Dividir");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn(`Dividir: ${n1} / 0 no está permitido`);
    return;
  }
  const resultado = n1 / n2;
  mostrar(`${n1} / ${n2} = ${resultado}`);
  console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
}

function potencia() {
  const numeros = leerOperandos("Potencia");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  const resultado = n1 ** n2;
  mostrar(`${n1} ** ${n2} = ${resultado}`);
  console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
}

function modulo() {
  const numeros = leerOperandos("Módulo");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  if (n2 === 0) {
    mostrar("No se puede calcular el módulo con divisor 0.", "danger");
    console.warn(`Módulo: ${n1} % 0 no está permitido`);
    return;
  }
  const resultado = n1 % n2;
  mostrar(`${n1} % ${n2} = ${resultado}`);
  console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
}

function cualEsMayor() {
  const numeros = leerOperandos("Comparación");
  if (numeros === null) return;
  const { n1, n2 } = numeros;
  if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`);
  } else {
    mostrar(`Los dos números son iguales: ${n1}.`);
  }
  console.log(`Comparar: ${n1} y ${n2}`);
}

function parOImpar() {
  const numero = leerNumero("numero1");
  if (Number.isNaN(numero)) {
    mostrar("Escribe el número 1 antes de comprobarlo.", "danger");
    console.warn("Par o impar: falta el número 1");
  } else if (!Number.isInteger(numero)) {
    mostrar(`${numero} tiene decimales: no es par ni impar.`, "warning");
    console.log(`Par o impar: ${numero} tiene decimales`);
  } else {
    const resultado = numero % 2 === 0 ? "par" : "impar";
    mostrar(`${numero} es ${resultado}.`);
    console.log(`Par o impar: ${numero} es ${resultado}`);
  }
}

function leerRepeticiones(tipo) {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero entre -∞ y ${MAXIMO_REPETICIONES} para repetir.`, "danger");
    console.warn(`${tipo}: cantidad no válida (${veces})`);
    return null;
  }
  return veces;
}

function mostrarTotal(contador) {
  const unidad = contador === 1 ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${unidad}`);
}

function bucleFor() {
  const veces = leerRepeticiones("for con texto");
  if (veces === null) return;
  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }
  mostrarTotal(contador);
  console.log(`for con texto: ${contador} repeticiones`);
}

function bucleWhile() {
  const veces = leerRepeticiones("while con texto");
  if (veces === null) return;
  let contador = 0;
  while (contador < veces) {
    contador++;
    anadirLinea(`while · repetición ${contador} de ${veces}`);
  }
  mostrarTotal(contador);
  console.log(`while con texto: ${contador} repeticiones`);
}

function bucleDoWhile() {
  const veces = leerRepeticiones("do...while con texto");
  if (veces === null) return;
  let contador = 0;
  do {
    contador++;
    anadirLinea(`do…while · repetición ${contador} de ${veces}`);
  } while (contador < veces);
  mostrarTotal(contador);
  console.log(`do...while con texto: ${contador} repeticiones`);
}

function badgesFor() {
  const veces = leerRepeticiones("for con badges");
  if (veces === null) return;
  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    const color = i % 2 === 0 ? "success" : "primary";
    anadirBadge(i, color);
    contador++;
  }
  mostrarTotal(contador);
  console.log(`for con badges: ${contador} repeticiones`);
}

function badgesWhile() {
  const veces = leerRepeticiones("while con badges");
  if (veces === null) return;
  let contador = 0;
  while (contador < veces) {
    contador++;
    const color = contador % 2 === 0 ? "success" : "primary";
    anadirBadge(contador, color);
  }
  mostrarTotal(contador);
  console.log(`while con badges: ${contador} repeticiones`);
}

function badgesDoWhile() {
  const veces = leerRepeticiones("do...while con badges");
  if (veces === null) return;
  let contador = 0;
  do {
    contador++;
    const color = contador % 2 === 0 ? "success" : "primary";
    anadirBadge(contador, color);
  } while (contador < veces);
  mostrarTotal(contador);
  console.log(`do...while con badges: ${contador} repeticiones`);
}
