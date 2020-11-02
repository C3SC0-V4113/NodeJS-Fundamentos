/*nodemon Fundamentos/Paquetes/Ejemplo_3/bcrypt.js */
const bcrypt=require("bcrypt");

const password="1234Segura!";

bcrypt.hash(password, 5 ,function(error,hash){
    console.log(hash);

    bcrypt.compare(password, hash,function(error,resultado){
        console.log(error);
        console.log(resultado);
    })
});