const formulario = document.querySelector('form');
const divMensaje = document.querySelector('#mensaje');
let inputNombre = document.querySelector('#nombre');
let inputEmail = document.querySelector('#email');
let textConsulta= document.querySelector('#consulta');

let datos ={
    nombre:'',
    email:'',
    consulta:'',
}

//Validar campos completos



formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    console.log('Envio de datos');

    
    console.log(nombre,email, consulta);

    //Validar campos completos

    validarDatos();
})



function validarDatos(){
    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let consulta = textConsulta.value;

    if(nombre.trim().length==0 || email.trim().length==0 || consulta.trim().length==0){
        mostrarMensaje();
    }
}

//funciones para ocultar y desocultar mensaje
function mostrarMensaje(){
    divMensaje.classList.remove('oculto');
}

function ocultarMensaje(){
    divMensaje.classList.add('oculto');
}

//funciones para los inputs
inputNombre.addEventListener("keypress",function(){
    ocultarMensaje();
})

inputEmail.addEventListener("keypress",function(){
    ocultarMensaje();
})

textConsulta.addEventListener("keypress",function(){
    ocultarMensaje();
})
//otra forma de ocultaMensaje
function agregarEventos(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input =>{
        input.addEventListener('keypress',function(){
            ocultarMensaje();
        });
        input.addEventListener('focus',function(){
            ocultarMensaje();
        })
    })
}

