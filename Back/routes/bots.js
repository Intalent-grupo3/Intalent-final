import express from "express";
import mongoose from 'mongoose'
var app = express();
app.use(express.json());
const botsRouter = express.Router();
import {generargenterandom} from '../llamadaFecthApi/llamadaapi.mjs';
//ruta de generar los usuarios
botsRouter.route('/generarbots').post((req, res, next)=>{
    generargenterandom()
    res.send("funciona escritura")
});
botsRouter.route('/borrardatabase').post((req, res, next)=>{
    mongoose.connection.collection('personas').drop();
    res.send("funciona borrado")
});

export default botsRouter;