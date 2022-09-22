const btnApi = document.querySelector('#random');
const area= document.querySelector('.tarjeta');
btnApi.addEventListener('click', function() {

    fetch('https://restcountries.com/v3.1/all')
    .then((responses) =>{
        console.log(responses);
        return responses.json(); //convierte a json
    }).then(datitos=>{ //recibo el json  del then anterior a datitos, cada then es un paso de una lista
        console.log(datitos);
        renderizar(datitos)
    }).catch((err) =>{
        console.log('Cata, error'+err);
    }).finally()//siempre se ejecuta;

});

function renderizar(lista){
    lista.forEach((item)=>{
        console.log(item.flags.png);

        let img = `<div>
                        <h2>${item.name.common}</h2>
                   <img src="${item.flags.png}" alt="${item.name.common}"/>
                   </div>`;
        area.innerHTML += img;
    });
}