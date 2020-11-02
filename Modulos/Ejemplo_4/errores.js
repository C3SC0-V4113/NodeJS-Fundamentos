/*nodemon Fundamentos/Modulos/Ejemplo_4/errores.js */
function otraFuncion(){
    return serompe();
}

function serompe(){
    return 3+z;
}

function seRompeAsic(){
    setTimeout(function(){
        return 3+z;
    })
}

/*try {
    serompe();
} catch (error) {
    console.error("Vaya, algo hapasao' "+error);
}*/

/*try {
    otraFuncion();
} catch (error) {
    console.error("Vaya, algo hapasao' "+error);
}*/

try {
    //Al ser asincrono, corre en otra memoria
    //Lo ideal es mantener el trycatch en el interior
    seRompeAsic();
} catch (error) {
    console.error("Vaya, algo hapasao' "+error);
}

console.log("Al final mi compa");