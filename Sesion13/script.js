const boton = document.querySelector('button');
const formulario = document.querySelector('form');

const nombreInput = document.querySelector('#nombre');
const passwordInput = document.querySelector('#pass');
const telefonoInput = document.querySelector('#tel');
const hobbiesInput = document.getElementsByName('hobbies');
const nacionalidadesInput = document.getElementsByName('nacionalidad');
const inputs = document.querySelectorAll('input');
const inscripcion = {
    nombre:'',
    password:'',
    telefono:'',
    hobbies:'',
    nacionalidades:'',
}

console.table(inscripcion);
boton.removeAttribute('disabled');

formulario.addEventListener('submit',validar);

inputs.forEach((input) => {
    input.classList.remove('error');
})

let areaErrores =`<section  class="areaErrores">
                   <ul id="areaErrores">

                   </ul>
                  </section>`;
formulario.innerHTML += areaErrores;

function validar(evento){

   
    let errores=[]
    if(nombreInput.value.trim()=='')
        {errores.push('Por favor complete nombre')}
    else{
        inscripcion.nombre=nombreInput.value;
    }

    if(passwordInput.value.trim()=='')
        {errores.push('Por favor complete pass')}
    else{
        inscripcion.password=passwordInputInput.value;
    }

    if(telefonoInput.value.trim()=='')
        {errores.push('Por favor complete telefono')}
    else{
        inscripcion.telefono=telefonoInput.value;
    }

    if(errores.length>0){
        evento.preventDefault();
        errores.forEach(error=>{
            document.getElementById('areaErrores').innerHTML+=`<li>${error}</li>`;
        })
    }else{

    }
    console.log('Enviando datos al servidor');
    console.table(inscripcion)
}

