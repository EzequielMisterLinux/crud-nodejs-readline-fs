import fs from "fs"

const database = "./product.json"

const getAllProducts = () => {

    fs.readFile(database, "utf8" , (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener todos los productos : ",error);
            return;
        }

        let info = JSON.parse(data)

        console.log("informacion obtenida exitosamente: ", info);
        
    })

}


export default getAllProducts