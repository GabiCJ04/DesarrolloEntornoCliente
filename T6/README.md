# Tarea 6 · Objetos y arrays

**Autor:** Gabriel Cruz Jiménez · DWEC · 2.º DAW · Curso 2026-27

Abre `index.html` en el navegador y prueba los botones con la consola abierta (F12). Hay seis ejercicios con objetos y arrays. Los cambios se reinician al recargar. Bootstrap necesita conexión a Internet.

## Capturas

Capturas locales obtenidas durante las comprobaciones de la página.

### a) Página recién cargada

<img src="capturas/a-pagina.png" alt="Página inicial con el nombre visible" width="600">

Se ven Gabriel Cruz Jiménez, los tres colores iniciales, seis productos y las ocho ciudades con sus posiciones.

### b) Ficha y colores

<img src="capturas/b-ej1-ej2.png" alt="Ficha modificada y lista de colores" width="600">

La edad pasa de 22 a 23 y el curso queda en `undefined` porque `delete` elimina esa propiedad. Los colores cambian con `push`, `pop` y `shift`.

### c) Catálogo ordenado

![Productos ordenados por precio](capturas/c-ej3-ordenado.png)

La comparación `a.precio - b.precio` ordena de menor a mayor. «Todos» recupera el orden inicial porque se ordena una copia.

### d) Notas y media

![Cinco notas y su media](capturas/d-ej4-notas.png)

Las notas 7.5, 4, 9, 5 y 3.25 dan 5.75 de media. Los aprobados aparecen en verde y los suspensos en rojo.

### e) Los tres métodos seguidos

![Pares, dobles y suma](capturas/e-ej5-cadena.png)

`filter` selecciona los pares, `map` los duplica y `reduce` obtiene 60. Debajo se muestra el array original sin cambios.

### f) Ciudades después de splice y búsqueda

![Ciudades tras eliminar dos y buscar Jaén](capturas/f-ej6-splice.png)

`splice(2, 2)` quita Málaga y Córdoba. Jaén pasa del índice 4 al 2; `includes` devuelve `true` e `indexOf`, 2.

## Reflexión

`push`, `pop`, `shift` y `splice` cambian el array original.<br>
`sort` también lo modifica, por eso se ordena `[...productos]`.<br>
`slice`, `map` y `filter` devuelven arrays nuevos.<br>
`reduce` calcula aquí una suma sin modificar los números.<br>
En las ciudades, `slice(2, 5)` devuelve tres y conserva las ocho.<br>
En cambio, `splice(2, 2)` elimina dos y desplaza las posiciones siguientes; Restaurar copia `ciudadesOriginal`.

## Fuentes

- [Plantilla del profesor](https://github.com/DRodero/DWEC_2627/tree/main/tema06_plantilla).
- Enunciado y temas 1 a 6 de DWEC facilitados: tipos y conversiones, condiciones, DOM, propiedades, métodos y arrays.

## Uso de IA

ChatGPT se ha utilizado para crear README
