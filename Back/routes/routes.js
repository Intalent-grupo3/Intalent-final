import express from "express";
import mongoose from 'mongoose'
import { Persona } from "../estructuraDocumentosBBDD/models.js";
var app = express();
app.use(express.json());
const router = express.Router();
import {generargenterandom} from '../llamadaFecthApi/llamadaapi.mjs';
//ruta de generar los bots
router.route('/generarbots').post((req, res, next)=>{
    generargenterandom()
    res.send("funciona escritura")
});
//borrar los bots
router.route('/borrardatabase').post((req, res, next)=>{
    mongoose.connection.collection('personas').drop();
    res.send("funciona borrado")
});
//crear nuevo perfil
router.route('/crearperfil').post((req,res,next)=>{
    Persona.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        } else {
            res.json(data)
        }
    })
})

export default router;