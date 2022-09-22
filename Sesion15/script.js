/*
REQUERIMIENTOS PARA LA APP

- utilizar el formulario para captar el texto ingresado Ok

- implementar el evento "submit", utilizarlo para guardar el comentario en un array - Ok

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico) Ok

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

/* --------------------------- Variables globales --------------------------- */
let formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario');
const areaComentarios = document.querySelector('#comentarios');
let listaComentarios=[]

/* ------------------------- Renderizar comentarios ------------------------- */
function renderizarComentarios(lista){
    areaComentarios.innerHTML = '';
    listaComentarios.forEach(elemento =>{
        let parrafo = document.createElement('p');
        parrafo.innerText = elemento;
        areaComentarios.appendChild(parrafo);
    })
    //guardarComentarios(listaComentarios);
}

/* --------------------------- Guardar datos en el storage -------------------------- */
function guardarComentarios(lista){
    localStorage.setItem('listaComentarios',JSON.stringify(listaComentarios));
}

/* ------------------------- leer datos del storage ------------------------- */
function leerDatos(){
    let datos = localStorage.getItem('listaComentarios');
    if(datos){ //si existe
        listaComentarios = JSON.parse(datos);
        renderizarComentarios(listaComentarios);
    }
}


/* ---------------------- Leer el evento de formulario ---------------------- */
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    let comentario=inputComentario.value.trim()
    console.log('comentariosss');

    if( comentario !=''){
        console.log('agregar comentario');
        listaComentarios.push(comentario); //agrego a la lista comentario
        inputComentario.value='';
        renderizarComentarios(listaComentarios); //primero renderizo
        guardarComentarios(listaComentarios); //luego guardo
    }

    console.log(listaComentarios);
})

function normalizar(input){
    return input.value.trim();
}

leerDatos()