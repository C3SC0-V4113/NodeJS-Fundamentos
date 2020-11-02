/*nodemon Fundamentos/Modulos/Ejemplo_7/http.js */
const http=require("http");

/*http.createServer(function(request,response){
    console.log("Nueva Peticion")
    console.log(request.url);
    
    response.writeHead(201,{"Content-Type":"text/plain"});
    response.write("HTTP de Node.js");

    response.end();
}).listen(3000);

console.log("Escuchando HTTP en el puerto 3000")*/

//

/*Metodo con buenas Practicas */
http.createServer(router).listen(3000);

function router(request,response){
    console.log("Nueva Peticion")
    console.log(request.url);
    
    switch(request.url){
        case "/hola":
            response.write("Hola, que tal");
            response.end();
            break;
        default:
            response.write("Error 404: No se lo que quieres");
            response.end();
    }

    response.writeHead(201,{"Content-Type":"text/plain"});
    response.write("HTTP de Node.js");

    response.end();
}

console.log("Escuchando HTTP en el puerto 3000")