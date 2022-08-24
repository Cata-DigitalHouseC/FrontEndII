let gatitos = [
    {
        id:1,
        nombre:'Mei',
        color: 'blanco',
        especie:'gato',
        imgUrl:'img/mei.jpg',
        edad:2,
        like: false
    },
    {
        id:2,
        nombre:'Chimu',
        color: 'negro',
        especie:'gato',
        imgUrl:'img/gris.PNG',
        edad:10,
        like: true
    },
    {
        id:3,
        nombre:'Gris',
        color: 'blanco',
        especie:'gato',
        imgUrl:'img/gris.PNG',
        edad:2,
        like: true
    }
];


const galeria = document.querySelector('.container');

/*                              Lo que debemos crear!!
        <div class="card">
            <div class="row">
                <h3 class="card-name"></h3>
                <i></i>
            </div>
            <img class="imagen" src="" alt="">
        </div> -->
*/

function crearCard(gatito)
{   
    /*
    let claseDinamica
    if(gatito.like)
    {
        claseDinamica='like';
    }
    else 
    {
        claseDinamica='';
    }
    */
    const card = `<div class="card">
                    <div onclick="favorito(${gatito.id})" class="row">
                        <h3 class="card-name">${gatito.nombre}</h3>
                        <i class="fa-solid fa-lg fa-heart ${gatito.like?'like':''}"></i>
                    </div>
                    <img src="${gatito.imgUrl}" class="imagen" alt="imagen de ${gatito.nombre}" id="${gatito.id}">
                </div>`;
    galeria.innerHTML+=card;
}


//Modifique el gatito del array
function favorito(id){
    gatitos.forEach(gatito => {
        if(gatito.id==id){
            gatito.like = (!gatito.like);
        }
    });

    galeria.innerHTML='';
    renderizarCards();
}

function renderizarCards()
{
    gatitos.forEach(gatito => {
        crearCard(gatito);
    });
    console.log('Renderizando');
}

setTimeout(renderizarCards,1000)