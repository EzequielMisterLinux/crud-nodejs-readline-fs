import fs from "fs";
import {v4 as uuidv4} from "uuid";

const database = "./product.json"

const createDatabase = (data) => {

    fs.writeFile(database, JSON.stringify(data), (error) =>{
        if (error) {
            console.error("hubo un error al crear la nueva base de datos : ", error);
            return;
        }

        fs.readFile(database, "utf8" , (error, data) => {
            if (error) {
                console.error("hubo un problema al obtener los datos de la nueva base de datos :", error);
                return;
            }

            let informacionNewDatabase = JSON.parse(data)

            console.log("base de datos creada exitosamente: ", informacionNewDatabase);
            
        })
    })

}


export default createDatabase