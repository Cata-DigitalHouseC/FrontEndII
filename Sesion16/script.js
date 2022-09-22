//promesas objetos pejecutar asinc, tiene dos valores a devolver, por si tofo fue ok o no ok, 
//La promesa puede cumplirse (resolve) o puede fallar (reject)
let miPromesa= new Promise((resolve,reject)=>{

    const cuenta = { //obj literal
        usuario: 'cata',
        saldo:1000,
        activo:true,
    }

    setTimeout(()=>{
        if(cuenta.saldo<1){
            //Saldo insuficiente
            //en promesa no se pone return, si falla sino reject
            reject({
                mensaje:'Saldo insuficiente'
            })
        }else if(!cuenta.activo){
            reject({
                mensaje:'Innactiva'
            })
        } else { //camino que resolvio
            resolve({
                mensaje:'cuenta activa consaldo '+cuenta.saldo,
            })
        }
    },4000) //simula demoramod
});

const cajero = document.querySelector('.bancaMobile');
const mensaje = document.querySelector('#mensaje');
//simulando demora en el servidor con carga asincroma
console.log('empiezo');
//then->camino feliz
//catch->fallas
miPromesa.then((respuesta)=>{
    console.log(respuesta);
    cajero.innerHTML=`<h4> Estado de la cuenta ${respuesta.mensaje}</h4>`
}).catch(err=>{
    console.log(err);
    cajero.innerHTML=`<h4> Error de la cuenta ${respuesta.mensaje}</h4>`
})

mensaje.innerHTML=`<h2 >Continua la craga de datos</h2> `
console.log('carga de datos');