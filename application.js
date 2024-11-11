import readline from "readline";
import {v4 as uuidv4} from "uuid"
import createDatabase from "./createDatabase.js";
import createNewProduct from "./createProducts.js";
import updateProductById from "./updateProducts.js";
import getAllProducts from "./readProducts.js";
import deleteProductByid from "./deleteProduct.js";


const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



const preguntar = () => interfaz.question("ingrese una opcion \n1-crear base de datos\n2-crear Producto\n3-leer productos\n4-actualizar productos \n5-eliminar producto: ",(opcion) => {
    let op = parseInt(opcion)

    if (op === 1) {

        interfaz.question("porfavor ingrese el nombre de un producto: ",(producto) => {

            interfaz.question("porfavor ingrese el precio del producto: ", (precio) => {

                
                const dataBaseNew = {
                    products: [
                        {
                            id: uuidv4(),
                            nombre: producto,
                            precio : parseFloat(precio)
                        }
                    ]
                }
                createDatabase(dataBaseNew)
                console.log("base de datos creada exitosamente\n");
                preguntar()
            })

        })

        
    }else if (op === 2) {
        interfaz.question("porfavor ingrese el nombre de un producto creando: ",(producto) => {

            interfaz.question("porfavor ingrese el precio del producto creando: ", (precio) => {

                
                const dataBaseNew = 
                        {
                            
                            nombre: producto,
                            precio : parseFloat(precio)
                        }
                    
                
                createNewProduct(dataBaseNew)
                console.log("producto actualizado exitosamente\n");
                preguntar()
            })

        })

        
    }else if (op === 3) {
        interfaz.question("porfavor ingrese el nombre de un producto editando: ",(producto) => {

            interfaz.question("porfavor ingrese el precio del producto editando: ", (precio) => {

                interfaz.question("porfavor ingrese el id del producto ", (id) => {
                    const dataBaseNew = 
                    {
                        id: uuidv4(),
                        nombre: producto,
                        precio : parseFloat(precio)
                    }
                
            
            updateProductById(id, dataBaseNew)
            console.log("producto creado exitosamente\n");
            preguntar()
                })
            })

        })
        
    }else if (op === 4) {

        console.log("los productos son :" , getAllProducts());
        
        
    }else if (op === 5) {
        interfaz.question("porfavor ingrese el id del producto que quiere borrar ", (id) => {

            console.log("producto eliminado exitosamente ", deleteProductByid(id));
            
        }) 
        
    }else {
        console.log("porfavor ingrese una opcion valida");
        preguntar()
        
    }
    

})

preguntar()