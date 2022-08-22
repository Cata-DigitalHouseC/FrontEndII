let gatitos = [
    {
        id:1,
        nombre:'Mei',
        color: 'blanco',
        especie:'gato',
        imgUrl:'',
        edad:2
    },
    {
        id:2,
        nombre:'Chimu',
        color: 'negro',
        especie:'gato',
        imgUrl:'',
        edad:10
    },
    {
        id:3,
        nombre:'Gris',
        color: 'blanco',
        especie:'gato',
        imgUrl:'',
        edad:2
    }
]




const contenedor=document.querySelector('main');
console.log(contenedor);

function crearCard(gatito,contenedor)
{
    const card = `<div id="${gatito.id}" class="card">
                    <h2>${gatito.nombre}</h2>
                    <img src="${gatito.imgUrl}">
                    <p> ${gatito.color}</p>
                  </div>`
    contenedor.innerHTML+=card;
}



for (const gatito of gatitos) {
    console.log(gatito.nombre+" "+gatito.color);
    crearCard(gatito,contenedor)
}

//document.querySelector('.card').style.backgroundColor = 'pink'


//agregar la clase active al primer gatito
function seleccionar(id)
{
    let gatito = document.getElementById(id);
    gatito.classList.add('active')
}

//Quitar la clase active a todas las card 
//Agregar la clase active a la card por id
function seleccionar1(id)
{
    let activos = document.querySelectorAll('.active');
    console.log(activos);
    activos.classList.remove('active')
}



//CambiarMondo
function cambiarModo()
{
    document.querySelector('body').classList.toggle('dark')
}