/// Element

const h1 = document.getElementById('firstTitle');
// const h1 = document.querySelector('#firstTitle');

// console.log(h1.className) -> sacamos la clase que contiene ese h1
// console.log(h1.id); -> sacamos el id que contiene ese h1
// console.log(h1.style); -> sacamos los estilos que posee
// console.log(h1.tagName); -> sacamos el tag name
// console.log(h1.textContent); -> sacamos la informacion que contiene esa etiqueta

// con el elemento podemos acceder a las propiedades y tambien podemos modificarlas

h1.textContent = 'Mi Nuevo Titulo desde JS';
h1.style.backgroundColor = 'red';
h1.style.color = 'white';
