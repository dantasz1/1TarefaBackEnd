//1° //
const express = require('express');
//2°//
const app = express()
//3°//
app.use(express.json());
//4°//
app.listen(3000 , () => {
    console.log("servidor iniciado")
})
//==============CRIAR APIs===============================
// GET / GET BY ID // 

app.get('/usuarios' , (req,res) => {
    console.log("APi GET todos")
    res.status(200).send("todos os usuarios")
})