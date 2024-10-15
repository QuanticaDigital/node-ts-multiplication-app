import { options } from "yargs";
import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";
import { headerMessage } from "./applogic";


//PARA MOSTRAR TODO EL PROCESO EN CONSOLA
// console.log(process.argv);

// const [tsnode, app, ...args] = process.argv;

// console.log(yarg);

//TODO EN NODE Es SINCRONO
//FUNCIONES ANONIMAS AUTOINVOCADAS EN NODE
//puedo utilizar funciones asincronas. por ejm llamo el main(es el punto de entrada de cualquier aplicación JavaScript - C#) que siempre me devuelve una promesa con el await de forma asincrona, no tuve que crear el modulo para contener el await

(async() => {
    await main();
})();

async function main() {
    //aqui mi dependencia del yarg  solo esta dentro de mi archivo de main porqué solo aquí quiero extraer mis dependencias
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;
    //({}) es para desestructurar un objeto
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}