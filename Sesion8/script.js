window.onload = function() //Esto sucede cuando el evento cargar termina, luego de cargar todo el HTML se ejecuta la funcion
{
    console.log('Cargo la página');

    let titulo = document.createElement('h1')
    titulo.innerText = 'Clase 08 - Web Reactiva'
    document.querySelector('header').appendChild(titulo);
}

//Arreglo de gatitos
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

function crearCard(gatito,contenedor)
{
    //Crear nodos
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen=document.createElement('img');
    let texto=document.createElement('p');
    //Asignarles atributos
    card.setAttribute('class','card')
    card.setAttribute('onclick','cambiarModo();'); //Evento sln3
    titulo.innerText = gatito.nombre;
    imagen.setAttribute('src',gatito.imgUrl);
    texto.innerText = gatito.color;

    //Enlazar nodos padres e hijos
    //Uno a uno con appendChild()
    contenedor.appendChild(card);
    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(texto);

    //Eventos addEventListener
    card.addEventListener('click',function(){  //Eventos sln2
        this.classList.add('active')
    })

    //card.addEventListener('click',alert('Otro eventListener')); //Eventos sln2 cod mas limpio
}

/*
function seleccionar(id)
{
    let gatito = document.getElementById(id);
    gatito.classList.add('active')
}
*/

//Quitar la clase active a todas las card 
//Agregar la clase active a la card por id
function seleccionar1(id)
{
    console.log('Se seleccionó a..');
    let activos = document.querySelectorAll('.active');
    console.log(activos);
    activos.classList.remove('active')
}

//CambiarMondo
function cambiarModo()
{
    document.querySelector('body').classList.toggle('dark')
}


console.log('Codigo Final');

//Add EventListever

//Paso1: en que objeto espero/escucho el evento ->window
//Paso 2: Que evento estamos llamando ->load
//Paso 3: Que funcion va a suceder ->iniciar
window.addEventListener('load', function(){
    iniciar();
})

function iniciar() 
{
    console.log('Cargo la página');

    let titulo = document.createElement('h1')
    titulo.innerText = 'Clase 08 - Web Reactiva'
    document.querySelector('header').appendChild(titulo);


//Ejercico de clase 6 de gatitos

const contenedor=document.querySelector('main');



///Create element

//1. Crear el nodo hijo
let titulo2=document.createElement('h2');
titulo2.innerText='Texto de h2'  //Mejor recomendado para text
// 2. seleccionar el padre (query selector)
let header=document.querySelector(".box");
// 3. Adiciono hijo al padre
header.appendChild(titulo2);



//Itero y llamo crear Card
for (const gatito of gatitos) {
    console.log(gatito.nombre+" "+gatito.color);
    crearCard(gatito,contenedor)
}

    //Eventos
    //Paso 1: selecciono elementos a observar
    let cards= document.querySelectorAll('.card')
    
    for (let i = 0; i < cards.length; i++) {   //Eventos Sln1 cuando tengo los elementos creados
        //console.log(cards[i]);
        cards[i].onclick = function()
        {
            alert('Seleccionado');
            //console.log(this);
            this.classList.add('active');
        }
    }

    // eventListener en crearCard()

    

}
/*
//3 formas de eventos
1. con un for y onclick y el function
2. con addEventListener
3. setAtribute con onclick y cambiarModo
*/