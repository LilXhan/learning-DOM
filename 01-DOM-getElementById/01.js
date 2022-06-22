/// DOM
// DOCUMENT OBJECT MODEL

// El modelo de objeto de documento (DOM) es una interfaz de pogramacion para los documentos HTML

// Facilita una representacion estructura del documento y difine de que manera los pogramas pueden acceder, al fin de
// modificar tanto su estructura, estilo y contenido

// Una pagina web es documento. Este documento puede exhibirse en la ventana de una navegador o tambien como codigo
// fuente html

/// DOCUMENT

// REPRESENTA CUALQUIER PAGINA WEB CARGADA EN EL NAVEGADOR Y SIRVE COMO UN PUNTO DE ENTRADA AL CONTENIDO DE UNA PAGINA

/// Propiedades
console.log(document); // consola: document# (TODO EL HTML)
console.log(document.head); // consola: <head></head>
console.log(document.title); // consola: Jugando con DOM

/// Metodos

// getElementById -> Devuelve una referencia el elemento por su id

console.log(document.getElementById('firstTitle')); // consola: <h1 id="firstTitle">Lorem, ipsum dolor.</h1>
console.log(document.getElementById('firstTitle').textContent); // consola: Lorem, ipsum dolor.
// console.log(document.getElementById('firstTitle').innerHTML); consola: Lorem, ipsum dolor. -> ESTA PROPIEDAD NO ES RECOMENDABLE YA QUE PODRIAMOS SUFRIR INYECCIONES
