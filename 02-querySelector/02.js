/// querySelector

// devuelve el primer elemento del documento que coincida con el grupo especificado de selectores (SOLO UNO)

console.log(document.querySelector('#firstTitle')); // usamos el querySelector con el selector de ID como en CSS
// consola: <h1 id="firstTitle" class="titlePrimary">Lorem, ipsum dolor.</h1>

console.log(document.querySelector('.titlePrimary')); // usamos el querySelector con el selecto de class como en CSS
// consola: <h1 id="firstTitle" class="titlePrimary">Lorem, ipsum dolor.</h1>

console.log(document.querySelector('h1')); // usamos el querySelector con el nombre de la etiqueta
// consola: <h1 id="firstTitle" class="titlePrimary">Lorem, ipsum dolor.</h1>
