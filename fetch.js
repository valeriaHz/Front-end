//peticiones cliente servidor //siempre te va a regresar algo
//asincrono no tiene que esperar a que actualice todo la pagina
//json notacion objeto java script formato universal

//respuesta se convierte en formato json valido para poderlo procesar


fetch(`local.php`)
.then((respuesta)=> respuesta.json()
).then((respuesta)=>{
    let [estado, msj] = respuesta;
    if(estado == 1){
        console.log(msj)
    }else{
        console.error("se produjo un error");
    }
}).catch((error)=>{
    console.log(`Se ha generado un error: ${error}`);
})
