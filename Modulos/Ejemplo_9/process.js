/*nodemon Fundamentos/Modulos/Ejemplo_9/process.js */
const p=require("process");

p.on("uncaughtException",(error,orig)=>{
    console.error("Pos se me fue ",error);
});

p.on("beforeExit",()=>{
    console.log("El proceso va a terminar");
});

p.on("exit",()=>{
    console.log("El proceso acabó");
});


functionQueNoExiste();
console.log("Si hay error, esto no sale");