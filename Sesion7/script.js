//Solicita una app que pida al usuario tres links de imagenes
// Crear tres card con las imagenes solicitas

// https://images.unsplash.com/photo-1573435567032-ff5982925350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80

// https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80



//Selecciono en donde crear, en el HTML
let app = document.getElementById('app');
app.style.display = 'flex';
let galeria = [];
//Crear una funcion de crearCard

function crearCard(url)
{
    //Crear nodos
    let card = document.createElement('div');
    let imagen = document.createElement('img');

    //Asignar atributos
    card.setAttribute('class','card');
    imagen.setAttribute('class', 'img-responsive');
    imagen.setAttribute('src',url);
    imagen.setAttribute('alt','Gatito y Perrito')

    //Unir los nodos
    app.appendChild(card);
    card.appendChild(imagen);
    console.log(card, imagen);

}

for (let i = 1; i <=3; i++) {
    //primero, solicitar la informacion
    let url = prompt('Ingrese URL de la img');
    galeria.push(url);
    crearCard(url);
    
}
