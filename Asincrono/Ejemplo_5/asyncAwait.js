/*nodemon Fundamentos/Asincrono/Ejemplo_5/asyncAwait.js */
async function Hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Hola, "+nombre);
            resolve(nombre);
        },1000);
    });
}

console.log("Iniciando proceso");

async function Hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Bla Bla Bla...");
            resolve(nombre);
        },1000);
    });
}

async function Adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Adios, "+nombre);
            resolve()
        },1000);
    });
}

async function main(){
    let nombre=await Hola("CESCO");
    await Hablar();
    await Adios(nombre);
    console.log("RECONTRA TERMINA");
}

console.log("Hola");
console.log("Empezamos");
main();
console.log("Terminamos");