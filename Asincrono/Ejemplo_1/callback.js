/*nodemon Fundamentos/Asincrono/Ejemplo_1/callback.js */
function soyAsincrona(micallback){
    console.log("Hola, soy una funcion asincrona")
    setTimeout(function(){
        console.log("Estoy siendo Asincrono");
        micallback();
    },1000);
}

console.log("Iniciando proceso");
soyAsincrona(function(){
    console.log("Terminando proceso");
});