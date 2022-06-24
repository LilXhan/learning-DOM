/// Eventos

// En javascript, la interaccion con el usuario se consigue mediante la captura de los eventos que este produce.
// EJemplos: si el usuario hace un click, pasa el mouse por encima, selecciona algo eso seria un evento.

/// addEventListener
// registra un evento a un objeto en especifico
// el objeto especifico puede ser un simple elemento en un archivo

// target.addEventListener(tipo o evento, listener);


const h1 = document.getElementById('firstTitle');
const boton = document.querySelector('.btn-primary');

boton.addEventListener('click', ()=>{
  h1.textContent = 'Nuevo Titulo Desde JavaScript';
  h1.style.color = 'red';
  h1.style.textAlign = 'center';
})


const inputColor = document.querySelector('#colorPick');

inputColor.addEventListener('input', ()=> {
  console.log(inputColor.value) // me muestra el valor del input o el color hexadecimal
})


