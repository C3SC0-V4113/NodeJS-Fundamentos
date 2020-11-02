/*nodemon Fundamentos/Asincrono/Ejemplo_2/callback2.js */
function Hola(nombre,micallback){
    setTimeout(function(){
        console.log("Hola, "+nombre);
        micallback(nombre);
    },1000);
}

console.log("Iniciando proceso");

Hola("CESQUETTA",function(nombre){
    Adios(nombre,function(){
        console.log("Terminando proceso");
    });
});

function Adios(nombre,otrocallBack){
    setTimeout(function(){
        console.log("Adios, "+nombre);
        otrocallBack()
    },1000)
}