
//funcion multiplicacion utilizando FileSystem


//importo filesystem 
import  fs  from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:showTable } = yarg;
let outputMessage = '';
export const headerMessage = `
====================================&
        Tabla del ${base}
===========================""=========""\n

`;

for( let i = 1; i <= limit; i++) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;

}

outputMessage = headerMessage + outputMessage;

if (showTable) {

    console.log(outputMessage);
    
}
//utilizando funcion de file System para crear carpetas y archivos con mis banderas 
const outputPath =`outputs`;


//solo para funciones sincronas
fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`,outputMessage);
console.log('File created!');

