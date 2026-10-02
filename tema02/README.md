# Tema 2 · Navegadores y primera página interactiva

**Gabriel Cruz Jiménez · Desarrollo Web en Entorno Cliente**

## Sitio y pruebas

La web tiene dos páginas. En `index.html` se comparan cinco navegadores y sus motores, con un ejemplo de compatibilidad de CSS `:has()`. En `interaccion.html` están los tres botones: saludar, simular un error y mostrar el navegador.

Las dos páginas usan la plantilla de Bootstrap, comparten el menú y se adaptan al móvil. El JavaScript está en `js/app.js`.

Las pruebas automáticas con Chrome y Firefox comprobaron que los botones funcionan y que no hay errores al cargar ni desplazamiento horizontal en los tamaños probados. El error de consola solo aparece al pulsar «Simular un error».

## Evidencias

![Página de navegadores en ordenador](capturas/01-index-ordenador.png)

Vista de escritorio con la tabla y mi nombre en el menú.

![Página de interacción con ancho móvil](capturas/02-interaccion-movil.png)

Vista de los tres botones con un ancho de 390 píxeles.

![Consola de Chrome](capturas/03-consola-chrome.png)

La consola muestra el userAgent y su aviso de compatibilidad. También aparece un error de seguridad al abrir la página como archivo local; no es el error simulado del botón.

![Alerta del navegador en Chrome](capturas/04-useragent-chrome.png)

El botón «¿Qué navegador soy?» muestra el userAgent de Chrome en una alerta.

![Proyecto abierto en VS Code con Live Preview](capturas/05-vscode-live-preview.png)

La carpeta `tema02` está abierta en VS Code, con el código de `index.html` y la página funcionando en Live Preview.

Las dos primeras capturas se obtuvieron automáticamente y las otras tres se tomaron manualmente. Quedan por documentar las trazas de los tres botones juntas, la alerta de Firefox, la barra de dispositivos de F12 y Live Server.

## Quién hace qué

En «Saludar», HTML crea el botón y llama a `saludar()` al pulsarlo. Bootstrap le da su aspecto y JavaScript muestra el saludo con `alert()` y deja una traza con `console.log()`. La alerta la ve el usuario; la traza se consulta en la consola.

## Comparación de userAgent

Valores recogidos en las pruebas automáticas:

**Chrome**

```text
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/154.0.0.0 Safari/537.36
```

**Firefox**

```text
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:153.0) Gecko/20100101 Firefox/153.0
```

Ambos indican Windows de 64 bits. Firefox incluye `Gecko` y Chrome aparece como `HeadlessChrome` porque la prueba se hizo sin ventana. Palabras como `Mozilla`, `AppleWebKit` o `Safari` se mantienen por compatibilidad y no significan que todos usen el mismo motor.

## Fuentes consultadas

Consulta: 2 de octubre de 2026.

- Apuntes de los temas 1 y 2.
- [Plantilla de la asignatura](https://github.com/DRodero/DWEC_2627/blob/main/plantilla/plantilla-base.html).
- [MDN: motores de renderizado](https://developer.mozilla.org/en-US/docs/Glossary/Engine/Rendering).
- [MDN: motores de JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Engine/JavaScript).
- [Can I use: CSS :has()](https://caniuse.com/css-has).
- [MDN: userAgent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

## Uso de IA

Este README ha sido creado por ChatGPT.
