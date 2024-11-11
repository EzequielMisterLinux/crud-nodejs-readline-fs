import fs from "fs"

const database = "./product.json"

const updateProductById =(id, newDataProduct) => {

    fs.readFile(database, "utf8" , (error, data) => {
        if (error) {
            console.error("hubo un problema al obtener todos los productos: ", error);
            
        }

        const informacion = JSON.parse(data)

        const indice = informacion.products.findIndex(product => product.id === id)

        if(indice >= 0){
            informacion.products[indice]= {
                ...informacion.products[indice],
                ...newDataProduct
            }
        }

        fs.writeFile(database, JSON.stringify(informacion), (error) => {
            if (error) {
                console.error("hubo un problema al actualizar el producto : ", error);
                
            }

            console.log("el producto se actualizo exitosamente", informacion);
            
        })
    })

}

export default updateProductById