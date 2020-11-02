/*nodemon Fundamentos/Paquetes/Ejemplo_5/sharp.js */
const sharp =require("sharp");

sharp("original.png")
    .resize(80)
    .toFile("resized.png");