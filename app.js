const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");


const carrito1 = require("./api/cart/654.json");
const carrito2 = require("./api/cart/987.json");
const compra = require("./api/cart/buy.json");
const catInfo = require("./api/category/1234.json");
const categorias = require("./api/category/all.json");
const comentarios = require("./api/product/5678-comments.json");
const prodInfo = require("./api/product/5678.json");
const productos = require("./api/product/all.json");
const comentar = require("./api/product/publish.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/cart/654.json", (req, res) => {
    res.json(carrito1);
});

app.get("/cart/987.json", (req, res) => {
    res.json(carrito2);
});

app.post("/cart/buy.json", (req, res) => {
    let nombre = Date.now();
    let archivo = fs.createWriteStream(`./compras/${nombre}.txt`);
    archivo.once("open", () => {
        archivo.write(JSON.stringify(req.body));
        archivo.end();
    });
    res.send(compra.msg);
});

app.get("/category/1234.json", (req, res) => {
    res.json(catInfo);
});

app.get("/category/all.json", (req, res) => {
    res.json(categorias);
});

app.get("/product/5678-comments.json", (req, res) => {
    res.json(comentarios);
});

app.get("/product/5678.json", (req, res) => {
    res.json(prodInfo);
});

app.get("/product/all.json", (req, res) => {
    res.json(productos);
});

app.get("/product/publish.json", (req, res) => {
    res.json(comentar);
});

const puerto = 8000;
app.listen(puerto, () => {
    console.log(`Servidor montado en el puerto ${puerto}`);
});