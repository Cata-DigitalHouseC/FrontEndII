//3 pasos
//1. Selecciono en que elemento estoy esperado/observando
window.addEventListener('load',function(){
    iniciar();
})

//Esto sucede cuando el evento onload - cargar termina, priero carga el html y luego se ejecuta el onload
window.onload = function iniciar(){
    console.log("Cargo la pagina");

    let titulo = document.createElement('h1') //creo elemento
    titulo.innerText  = 'Clase 08 - Front II'

    document.querySelector('header').appendChild(titulo);
}

/////cats
///1. 
let cards = document.querySelectorAll('.card');
cards.on

