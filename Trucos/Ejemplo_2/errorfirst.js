const { callbackify } = require("util");

/*nodemon Fundamentos/Trucos/Ejemplo_2/errorfirst.js */

function Asincrona(callback){
    setTimeout(function(){
        try {
            let a=3+z;
            callback(null,a)
        } catch (e) {
            callback(e);
        }
    },1000)
}

Asincrona(function(error,dato){
    if (error) {
        console.error("Tenemos un Error ",error);
        return false;
    } else {
        console.log("De maravilla, mi data es: ",dato);
    }
})