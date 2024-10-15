import { Options } from "yargs";

/**
 * CASOS DE USO
 */

//iNTERFACE NUNCA ES VISIBLE EN JAVASCRIPT PERO ES EL LUGAR DONDE COLOCOLAS REGLAS QUE LOS OBJETOS DE ABAJO TIENEN QUE CMPLIR ANTES DE EJECUTARCE 
export interface CreateTableUseCase{
    execute: ( Options: CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base:number;
    //? es para indicar que es opcional , solo con los : es obligatorio
    limit?: number;
}

//Con el implements estoy conectando esta clase con la interface
export class CreateTable implements CreateTableUseCase{

    //como estamos en typescript lo ideal es siempre trabajar con un constructor y el constructor siempre va a ser el primer metodo que se va a llamar ( en JavaScript también)
    constructor(

    ){}
    
    //METODO QUE CREA LA TABLA
    execute({ base, limit = 10}: CreateTableOptions ){
      
        let outputMessage = '';
        for (let i = 1; i <= limit; i++){
            outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
  
    }

    return outputMessage;
    }}