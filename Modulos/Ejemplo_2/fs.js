/*nodemon Fundamentos/Modulos/Ejemplo_2/fs.js */
const fs=require("fs");

function Leer(ruta,callback){
    fs.readFile(ruta,(error,data)=>{
        //Leido
        callback(data.toString());
    })
}

//Leer(__dirname+"/archivo.txt", console.log)

function Escribir(ruta,contenido,callback){
    fs.writeFile(ruta,contenido,function(error){
        if (error) {
            console.error("No he podido escribirlo ",error)
        } else {
            console.log("Se ha escrito correctamente");
        }
    });
}

//Escribir(__dirname+"/archivo1.txt","Soy un archivo Nuevo",console.log);

function Borrar(ruta,callback){
    fs.unlink(ruta,callback);
}

//Borrar(__dirname+"/archivo1.txt",console.log);