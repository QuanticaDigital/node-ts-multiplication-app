import { headerMessage } from "../applogic";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    
    base:            number;
    limit:           number;
    showTable:       boolean;
    fileDestination: string;
    fileName:        string;

}

export class ServerApp{

    //Metodo donde se crea el archivo
    static run({ base, limit, showTable, fileDestination, fileName }: RunOptions){
        
        console.log( 'server running.....');
        console.log( headerMessage);

        const table = new CreateTable().execute({base, limit, });
        
        //Creación del archivo, si añado nuevas opciones las debo llamar acá también
        const wasCreated = new SaveFile()
            .execute({
                fileContent: table, 
                // fileDestination: `outputs/table-${ base }`,
                //al colocarlo solo con la coma recibe el valor por defecto, el que le di en el metodo static 
                fileDestination,
                fileName,
            });

        if ( showTable ) console.log( table );

        ( wasCreated )
        ? console.log('file created')
        :console.error('File Not Created');
    }
}