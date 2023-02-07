const express = require("express");
const app = express();
const productManager = require("./ProductManager")
app.use(express.urlencoded({extended:true}));

const product = new productManager();


app.get("/products", (req, res) => {

    product
        .getProducts()
        .then((data) => {
            let limit = req.query.limit;
            if(!limit){
                return res.send(data)
            }else{
                let resultado = data.slice(0, Object.values(limit));
                res.send(resultado)
            }
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
})

app.get("/products/:pid", (req, res) => {
    let idUsuario = req.params.pid;
    product
        .getProducts()
        .then((data) => {
            let resultado = data.find(el => el.id == idUsuario);
            if(resultado){
                res.send(resultado)
            }else{
                res.send(`El producto con id ${idUsuario} no existe`)
            }
        })
        .catch((error) => {
            console.log({error});
            res.send({error});
        });
})


app.listen(8080, () => console.log("Servidor arriba"));