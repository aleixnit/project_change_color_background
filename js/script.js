//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// Al hacer click en el botón "Click Me!" el color del fondo de body siemore cambia al mismo color, por ejemplo, amarillo. Podeis modificar el html si lo creeis oportuno.

// Paso 1: Poner una oreja al botón para que capture el evento click. Que me muestre por consola 'me has hecho click'
document.querySelector("#btn").onclick = function () {
    console.log("Me has hecho click");
};

// Paso 2: cambia el color del body a amarillo: 1 linea de codigo.
// Seleccionar el nodo 'body' y cambiar su estilo en linea a amarillo. Recuerda que la 'style' es un objeto con muchas propiedades.








  function setRandomBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
  }

  const btn = document.getElementById('btn');
  btn.addEventListener('click', setRandomBackgroundColor);

  // Llama a la función en la carga inicial de la página
  setRandomBackgroundColor();