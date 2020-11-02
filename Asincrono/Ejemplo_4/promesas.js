/*nodemon Fundamentos/Asincrono/Ejemplo_4/promesas.js */
function Hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Hola, "+nombre);
            resolve(nombre);
        },1000);
    });
}

console.log("Iniciando proceso");

function Hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Bla Bla Bla...");
            resolve(nombre);
        },1000);
    });
}

function Adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Adios, "+nombre);
            resolve()
        },1000);
    });
}

//

Hola("CESQUETTA")
    .then(Hablar)
    .then(Adios)
    .then((nombre)=>{
        console.log("Terminado el proceso");
    })
    .catch(error=>{
        console.error("Ha habido un error: ")
        console.error(error);
    })