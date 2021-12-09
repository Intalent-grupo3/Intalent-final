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
router.route('/perfil/:id').get((req, res,next) => {
    Persona.findOne({loginId:req.params.id}, (error, data) => {
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

//traer perfil aleatorio
let user;
router.route('/perfil-aleatorio/:id').get((req,res,next)=>{
    console.log('esto es req.params.id: '+req.params.id)
     user = Persona.findOne({loginId:req.params.id});
    user.select('likes dislikes')
    user.exec(function(err,user){
        if (err) return handleError(err);
        console.log(user.likes)
        Persona.findOne({$and:[{loginId:{$nin :user.likes}},{loginId:{$nin:user.dislikes}}]}, (error, data) => {
            console.log('Array likes user: '+user.likes)
            if (error) {
                return next(error)
            } else {
                res.json(data)
                console.log('Id de la persona que cumple la query'+data.loginId)
            }
        })
    })
    
    
})

//dar like a un perfil
router.route('/dar-like/:id').put((req,res,next)=>{
    Persona.findOneAndUpdate({loginId:req.params.id},{$push:{likes : req.body}},(error,randUserId)=>{
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(randUserId)
            console.log('Like añadido correctamente!')
        }
    })
})

//dar dislike a un perfil
router.route('/dar-dislike/:id').put((req,res,next)=>{
    Persona.findOneAndUpdate({loginId:req.params.id},{$push:{dislikes : req.body}},(error,randUserId)=>{
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(randUserId)
            console.log('Disike añadido correctamente!')
        }
    })
})


export default router;