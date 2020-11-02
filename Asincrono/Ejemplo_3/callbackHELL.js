/*nodemon Fundamentos/Asincrono/Ejemplo_3/callbackHELL.js */
function Hola(nombre,micallback){
    setTimeout(function(){
        console.log("Hola, "+nombre);
        micallback(nombre);
    },1000);
}

console.log("Iniciando proceso");

function Hablar(callbackHablar){
    setTimeout(function(){
        console.log("Bla Bla Bla...");
        callbackHablar();
    },1000);
}

function Adios(nombre,otrocallBack){
    setTimeout(function(){
        console.log("Adios, "+nombre);
        otrocallBack()
    },1000)
}


///
/*Este es el CALLBACKHELL */
/*Hola("CESQUETTA",function(nombre){
    Hablar(function(){
        Hablar(function(){
            Hablar(function(){
                Adios(nombre,function(){
                    console.log("Terminando proceso");
                });
            });
        });
    });
});*/

///

/*CALLBACKHELL Sencillo */
/*Hola("CESQUETTA",function(nombre) {
    Adios(nombre,function () {
        console.log("Terminamos")
    });
});*/

///

/*Buenas Practicas */
/*Creando Funciones Intermedias */
function conversacion(nombre,veces,callback) {
    /*Aplicando Recursividad */
    if (veces>0) {
        Hablar(function () {
            conversacion(nombre,--veces,callback);
        })
    }
    else{
        Adios(nombre,callback);
    }
}

Hola("CESQUETTA",function(nombre){
    conversacion(nombre,3,function(){
        console.log("Proceso Terminado");
    })
});