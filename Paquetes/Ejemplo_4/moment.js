/*nodemon Fundamentos/Paquetes/Ejemplo_4/moment.js */
/*nodemon moment.js */
const moment=require("moment");

let ahora=moment();

console.log(ahora);
console.log(ahora.toString());
console.log(ahora.format("YYYY/MM/DD - HH:mm"));