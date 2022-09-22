//json solo datos y no metodos, las claves deben ir entre comillas, y puede tener propiedades como arryar,-> diferencias con obj literal

let objetoJSON ={
    "nombre":"Cata",
    "mascotas": ['ca1','ca2','ca3']
}

let objeto1 ={
    nombre:"Cata",
    mascotas: ['ca1','ca2','ca3']
}

let objeto1String=JSON.stringify(objeto1);
console.log(objeto1String);

let objeto1JSON = JSON.parse(objeto1String);
console.log(objeto1JSON)

//declarar variables globales
let formulario = document.querySelector('form');
let inputBusqueda = document.querySelector('#busqueda');
let historial = document.querySelector('#busquedas-realizadas');
let busquedas = [];

if(localStorage.getItem('historial')){
    busquedas=JSON.parse(localStorage.getItem('historial'));
}

//leer los datos del formulario

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    let palabra = busquedas.push(normalizar(busqueda)); 

    if(palabra!=''){
        busquedas.push(palabra);
        inputBusqueda.value='';//reseteo
        guardarDatos(busquedas);
        renderizarBusquedas(busquedas);
        abrirBusqueda(palabra);
    }
    
})

//Guardar datos en el local storage
function guardarDatos(listado){
    localStorage.setItem('historial',JSON.stringify(listado));
}

//Normalizar
function normalizar(input){
    let palabra = input.value.trim();
    return palabra;
}


//Renderizando el historil
function renderizarBusquedas(listado){
    //historial.innerHTML ='';
    listado.forEach(elemento =>{
        let parrafo = document.createElement('p');
        parrafo.textContent=elemento;
        historial.appendChild(parrafo);
    })
}

//Redireccionar a Google con el param de busqueda
// Redireccionar a Google con el parametro de busqueda
function abrirBusqueda(palabra){
    location.replace(`https://www.google.com.ar/search?q=${palabra}`);
}

