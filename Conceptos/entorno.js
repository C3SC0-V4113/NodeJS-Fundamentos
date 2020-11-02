/*node Fundamentos/Conceptos/entorno.js*/
/*Buscar Nodemon */
/*nodemon Fundamentos/Conceptos/entorno.js*/
/*Buscar PM2 */
/*pm2 start Fundamentos/Conceptos/entorno.js*/
let nombre=process.env.NOMBRE||"sin nombre";
let web=process.env.WEB||"no tengo web";
console.log("Hola "+nombre);
console.log("Mi web es: "+web);