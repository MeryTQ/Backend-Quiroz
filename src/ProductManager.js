const fs = require("fs");

let id = 0;

module.exports = class ProductManager {
    constructor() {
        this.path = "./products.json"
    }
    getProducts = async() => {
        const readProducts = await fs.promises.readFile(this.path);
        const productsParse = JSON.parse(readProducts);
        return productsParse;
    }
    getProductById = async(id) => {
        const readProducts  = await fs.promises.readFile(this.path);
        const productsParse = JSON.parse(readProducts);
        const productsFind = productsParse.find(el => el.id == id);
        productsFind 
        ? productsFind
        : console.error(`El producto con id ${id} no existe`);
    }
    updateProduct = async(id, campo, actualizacion) => {
        const readProducts = await fs.promises.readFile(this.path);
        const productsParse = JSON.parse(readProducts);

        productsParse.find((i) => {
            if(i.id === id){
                i[campo] = actualizacion;
                fs.promises.writeFile(this.path, JSON.stringify(productsParse));
            }
        });
    }
    deleteProduct = async(id) => {
        const readProducts  = await fs.promises.readFile(this.path);
        const productsParse = JSON.parse(readProducts);
        const productsFind = productsParse.find(el => el.id === id);
        if(productsFind){
            const productsIndex = productsParse.indexOf(productsFind);
            productsParse.splice(productsIndex, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(productsParse))
        }else{
            console.error(`El producto con id ${id} no existe`);
        }
    }
}
