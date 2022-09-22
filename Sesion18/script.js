const btn1= document.querySelector('#boton1');
const btn2= document.querySelector('#boton2');
const btn3= document.querySelector('#boton3');
const btn4= document.querySelector('#boton3');
const respuesta = document.querySelector('#mensaje-posteado');
arreglobtn=[btn1,btn2,btn3,btn4];

//Simulo Post del usuario
arreglobtn.forEach(elem=>{
    elem.addEventListener('click', () => {
    console.log('Mensaje',this.dataset);
    let id_usuario= this.dataset.idUsuario;
    let titulo = this.dataset.titulo;
    console.log(id_usuario,titulo);
    publicar(id_usuario,titulo);
    })
    })

    //post, en la clase pasada el fetch era tipo get
function publicar(id, mensaje){
    const url='https://jsonplaceholder.typicode.com/posts';
    const datosEnviar={
        title:titulo,
        userId:id
    }
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(datosEnviar),
        headers:{'Content-Type': 'application/json; charset=utf-8'},
    }).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(respuestaJson){ //cuando se resolvio la promesa
        console.log(respuestaJson);
        renderizarPost(respuestaJson.title, respuestaJson.id)
    }).catch(function(err){
        console.log(err);
        respuesta.innerHTML=`<h4> Errores</h4>`
    })
}

function renderizarPost(titulo,id){
    respuesta.innerHTML=`Se guardo el mensaje ${titulo} en su id: ${id}`;
}
