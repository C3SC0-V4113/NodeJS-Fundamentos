/*nodemon Fundamentos/Modulos/Ejemplo_3/consola.js */
console.log("Algo");
console.info("Algo");
console.error("Algo");
console.warn("Algo");
var tabla=[
    {
        a:1,
        b:"z"
    },
    {
        a:2,
        b:"x"
    }
]
console.table(tabla);
console.group("Conversacion");
console.log("Hola");
console.log("Bla Bla Bla"); 
console.log("Adios");
console.groupEnd("Conversacion");

console.count("veces")
console.count("veces")
console.count("veces")
console.countReset("veces")
console.count("veces")