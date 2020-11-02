/*nodemon Fundamentos/Memoria/Ejemplo_2/stream.js */
const fs=require("fs");
const stream=require("stream");
const util=require("util");

let data="";

let readabeStream=fs.createReadStream(__dirname+"/input.txt");

readabeStream.setEncoding("utf-8");

readabeStream.on("data",function(chunk){
    //console.log(chunk);
    data+=chunk;
});

readabeStream.on("end", function(){
    console.log(data);
});

/*process.stdout.write("Hola");
process.stdout.write("Que");
process.stdout.write("Tal");*/

const Transformar=stream.Transform;

function Mayus(){
    Transformar.call(this);
}
util.inherits(Mayus,Transformar);

Mayus.prototype._transform=function(chunk,codif,cb){
    chunkMayus=chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

var mayus=new Mayus();

readabeStream
    .pipe(mayus)
    .pipe(process.stdout);