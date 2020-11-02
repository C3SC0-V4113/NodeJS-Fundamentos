/*nodemon Fundamentos/Modulos/Ejemplo_5/procesoHijo.js */
//const{exec}=require("child_process");
const { stdout } = require("process");

/*En linux y mac en lugar de "dir" se usas "ls-la" */
/*exec("dir",(error,estout, sterror)=>{
    if (error) {
        console.error(error);
        return false;
    }

    console.log(stdout);
})*/

const{exec,spawn}=require("child_process");
let proceso=spawn("ls",["-la"])
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function(dato){
    console.log("¿Esta muerto? "+proceso.killed);
    console.log(dato.toString());
});

proceso.on("exit",function(){
    console.log("El proceso termino");
    console.log("¿Esta muerto? "+proceso.killed);
})