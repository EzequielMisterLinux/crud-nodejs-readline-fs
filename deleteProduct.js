import fs from "fs";


const database = "./product.json"

const deleteProductByid = (id) => {

    fs.readFile(database, "utf8", (error, data) => {
        if (error) {
            console.error("hubo un problema al leer el documento json: ",error);
            return;
        }

        const informacion = JSON.parse(data)

        informacion.products = informacion.products.filter(product => product.id !== id)

        fs.writeFile(database, JSON.stringify(informacion) ,(error) =>{
            if (error) {
                console.error("hubo un problema al borrar el producto", error);
                
            }

            console.log("producto eliminado exitosamente", informacion);
            
        }) 


    })

}

export default deleteProductByid