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
//pedir la info de nuestro perfil
router.route('/perfil/:id').get((req, res) => {
    Persona.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//borrar perfil
router.route('/borrar-perfil/:id').delete((req, res, next) => {
    Persona.findOneAndRemove({loginId:req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//updatear la info del perfil
router.route('/actualizar-perfil/:id').put((req,res,next)=>{
    Persona.findOneAndUpdate({loginId:req.params.id},{$set: req.body},(error,data)=>{
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Perfil actualizado correctamente!')
        }
    })
})

export default router;