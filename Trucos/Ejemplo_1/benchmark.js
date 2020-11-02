/*nodemon Fundamentos/Trucos/Ejemplo_1/benchmark.js */

let suma=0;

console.time("bucle");

for (let i = 0; i < 1000000000; i++) {
    suma+=1;    
}

console.timeEnd("bucle");

let suma2=0;

console.time("bucle 2");

for (let i = 0; i < 100000000; i++) {
    suma2+=1;    
}

console.timeEnd("bucle 2");

console.time("Asincrono");
console.log("Empieza Proceso Asincrono");
asincrona()
    .then(()=>{
        console.timeEnd("Asincrono");
    });

function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log("Termina el proceso Asincrono");
            resolve();
        })
    })
}