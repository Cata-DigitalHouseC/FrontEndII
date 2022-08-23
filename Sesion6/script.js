let gatitos = [
    {
        id:1,
        nombre:'Mei',
        color: 'blanco',
        especie:'gato',
        imgUrl:'img/chimu.PNG',
        edad:2
    },
    {
        id:2,
        nombre:'Chimu',
        color: 'negro',
        especie:'gato',
        imgUrl:'img/gris.PNG',
        edad:10
    },
    {
        id:3,
        nombre:'Gris',
        color: 'blanco',
        especie:'gato',
        imgUrl:'img/gris.PNG',
        edad:2
    }
]




const contenedor=document.querySelector('main');
console.log(contenedor);




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



///Create element

//1. Crear el nodo hijo
let titulo2=document.createElement('h2');
titulo2.innerText='Texto de h2'  //Mejor recomendado para text
// 2. seleccionar el padre (query selector)
let header=document.querySelector(".box");
// 3. Adiciono hijo al padre
header.appendChild(titulo2);

function crearCard(gatito,contenedor)
{
    //Crear nodos
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen=document.createElement('img');
    let texto=document.createElement('p');
    //Asignarles atributos
    card.setAttribute('class','card')
    titulo.innerText = gatito.nombre;
    imagen.setAttribute('src',gatito.imgUrl);
    texto.innerText = gatito.color;

    //Enlazar nodos padres e hijos
    //Uno a uno con appendChild()
    contenedor.appendChild(card);
    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(texto);
    //Otra forma de enlazar todos  los nodod de una vez con append, es importante el orden (opcional)
    //card.append(titulo,imagen,texto);
    
    /* Version Anterior Clase 5
    const card = `<div id="${gatito.id}" class="card">
                    <h2>${gatito.nombre}</h2>
                    <img src="${gatito.imgUrl}">
                    <p> ${gatito.color}</p>
                  </div>`
    contenedor.innerHTML+=card;
    */
}

//Itero y llamo crear Card
for (const gatito of gatitos) {
    console.log(gatito.nombre+" "+gatito.color);
    crearCard(gatito,contenedor)
}