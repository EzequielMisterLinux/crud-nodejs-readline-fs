import fs from "fs";


const database = "./product.json"

const createNewProduct = (newProduct) =>{

    fs.readFile(database, "utf8" , (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener los datos : ", error);
            return;
        }
        const informacion = JSON.parse(data)
        console.log("informacion actual : ",informacion);

        informacion.products.push(newProduct)
        

        fs.writeFile(database, JSON.stringify(informacion), (error) => {
            if (error) {
                console.error("hubo un problema al crear el producto: ",error);
                
            }
            console.log("producto creado exitosamente: ", informacion);
            
        })
    })
}

export default createNewProduct