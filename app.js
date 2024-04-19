/* inputs de los colores*/
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

/*parrafos */
const TextoRojo = document.getElementById('texto-rojo');
const TextoVerde = document.getElementById('texto-verde');
const TextoAzul = document.getElementById('texto-azul');

/*rango de colores */
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

TextoRojo.innerText = rojo;
TextoVerde.innerText = verde;
TextoAzul.innerText = azul;


/*actulizar parametros */
function actulizarColor(rojo,verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//actualizar inputs

inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    TextoRojo.innerText= rojo;
    actulizarColor(rojo, verde, azul);
});
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    TextoVerde.innerText= verde;
    actulizarColor(rojo, verde, azul);
});
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    TextoAzul.innerText= azul;
    actulizarColor(rojo, verde, azul);
});