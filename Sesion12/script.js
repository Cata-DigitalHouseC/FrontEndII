const boton = document.querySelector('button');
const formulario = document.querySelector('form');

const nombre = document.querySelector('#nombre');
const password = document.querySelector('#pass');
const telefono = document.querySelector('#tel');
const hobbies = document.getElementsByName('hobbies');
const nacionalidades = document.getElementsByName('nacionalidad');
const inputs = document.querySelectorAll('input');
const inscripcion = {
    nombre:'',
    password:'',
    telefono:'',
    hobbies:'',
    nacionalidades:'',
}

console.table(inscripcion);

//orden: selecciona elementos, creamos variables y luego los listener
/*
window.addEventListener('keydown', function(evento){
    evento.preventDefault(); //bloquea los eventos sgtes
    console.log('Tecla',evento.key);
})
*/

console.log(hobbies);
console.log(nacionalidades);

boton.removeAttribute('disabled');
nombre.classList.remove('error');

formulario.addEventListener('submit',validar);

function validar(evento){
    evento.preventDefault();
    console.log('Validando el formulario');
    let listaHobbies = [];
    let nacionalidadEscogida = '';


    //validacion de inputs
    inputs.forEach(element =>{
        if(element.value.trim() === ''){
            element.classList.add('error');
        }

        element.addEventListener('click', function(){
            element.classList.remove('error');
        })
    })

    //validacion de hobbies
    hobbies.forEach(hobbie =>{
        if(hobbie.checked){
            listaHobbies.push(hobbie.id);
        }
    })
        console.log(listaHobbies);

    if(listaHobbies.length>4){
        alert('Escoja hasta 4 hobbies');
    }else{
        inscripcion.hobbies = listaHobbies;
    }

    //validacion de nacionalidad
    nacionalidades.forEach(nacionalidad =>{
        if(nacionalidad.checked){
            nacionalidadEscogida = nacionalidad.id;
        }
    })

    //agregar los datos al objeto inscripcion
    inscripcion.nombre=nombre.value;
    inscripcion.password=password.value;
    inscripcion.telefono=telefono.value;
    inscripcion.nacionalidades= nacionalidadEscogida;

    console.table(inscripcion);
}

