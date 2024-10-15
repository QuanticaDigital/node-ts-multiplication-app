/**
 * PRIMER PASO ES CREAR LAS OPCIONES EL SEGUNDO IR A APP.TS
 */
import { argv } from 'process';
import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(process.argv)

    //Opcion para configurar yargs fácil  
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication tabla base'

    })

    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 12,
        describe: 'Multiplication limite de tabla'
    })

    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication base'

    })

    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'Tabla de multiplicar',
        describe: 'File name'
    })

    .option('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })

    

    // el check recibe la funcion que recibe dos argumentos y estos son opcionales
    .check((args, options)=>{

        if ( args.b < 1 ) throw 'Error: La base espera un número';

        return true;

    })

    .parseSync()


