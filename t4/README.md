# Tarea 4 · Calculadora y bucles

**Autor:** Gabriel Cruz Jiménez · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

En esta carpeta está la tarea de operadores y bucles. Abro `index.html` con Live Server, escribo los números y pulso los botones; para ver el rastro de cada función, abro la consola con F12. La página usa la rejilla, las cards y los botones de Bootstrap y se adapta a pantallas pequeñas.

## Capturas

Las capturas se tomaron en el navegador del equipo con la página abierta en localhost. En la vista móvil se usó el modo dispositivo de las herramientas de desarrollo.

### a) Página completa

![Página completa con el nombre visible](capturas/a-pagina.png)

Se ven el nombre, las tarjetas de los ejercicios y el pie de página.

### b) Vista móvil

![Página en modo dispositivo móvil](capturas/b-movil.png)

La rejilla se adapta a un ancho de 400 píxeles y las tarjetas quedan apiladas.

### c) División entre cero

![Error al dividir entre cero y mensaje de la consola](capturas/c-dividir-cero.png)

Al dividir 5 entre 0 aparece el aviso rojo y la consola registra la operación no permitida.

### d) Bucles con cero

![Bucles de texto con el número 0](capturas/d-bucles-cero.png)

`for` y `while` hacen cero vueltas; `do…while` se ejecuta una vez porque comprueba la condición al final.

### e) Badges

![Seis badges con colores alternos](capturas/e-badges.png)

El bucle `while` añade seis badges: los impares son azules y los pares verdes; también muestra el total.

## Reflexión

El `for` reúne el inicio, la condición y el cambio del contador, por eso viene bien cuando sé cuántas vueltas necesito.  
El `while` comprueba su condición antes de entrar y puede no ejecutarse ninguna vez.  
Lo usaría si las repeticiones dependen de una condición que puede cambiar.  
El `do…while` comprueba la condición al final, así que ejecuta el bloque al menos una vez.  
Con el número 0, `for` y `while` no hacen vueltas, pero `do…while` sí hace una.  
En los tres casos cuento las vueltas para mostrar el total.

## Fuentes

- Apuntes de los temas 1, 2, 3 y 4 de Desarrollo Web en Entorno Cliente, facilitados en el campus.
- Enunciado «Tarea 4. Calculadora y bucles», facilitado en el campus.
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) para la rejilla, las cards, los botones y los badges.
- [MDN: operadores aritméticos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators) y [MDN: sentencias de iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Uso de IA

He utilizado ChatGPT para recibir ayuda con la implementación del código JavaScript, la maquetación y la redacción de este README. Debo revisar el código y asegurarme de que puedo explicar las funciones y modificarlas en la defensa.
