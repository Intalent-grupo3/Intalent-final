import express from "express";
import mongoose from 'mongoose'
import { Persona } from "../estructuraDocumentosBBDD/models.js";
var app = express();
app.use(express.json());
const router = express.Router();
import { generargenterandom } from '../llamadaFecthApi/llamadaapi.mjs';
//ruta de generar los bots
router.route('/generarbots').post((req, res, next) => {
    generargenterandom()
    res.send("funciona escritura");
});
//borrar los bots
router.route('/borrardatabase').post((req, res, next) => {
    mongoose.connection.collection('personas').drop();
    res.send("funciona borrado");
});
//crear nuevo perfil
/**
 * @swagger
 * components: 
 *  schemas:
 *      User: 
 *          type: object
 *          properties:
 *              loginId: 
 *                  type: string
 *              gender:
 *                  type: string
 *              name:
 *                  type: string
 *              city:
 *                  type: string
 *              country:
 *                  type: string
 *              dob:
 *                  type: data
 *              image:
 *                  type: string
 *              topics:
 *                  type: string
 *          example:
 *                  loginId: hag212442asf
 *                  gender: femenino
 *                  name: Rosa
 *                  city: Sevilla
 *                  country: España
 *                  image: https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg
 *                  topics: naturaleza, travel
 */

/**
 * @swagger
 * /api/crearperfil:
 *  post:
 *      summary: create a new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: new user created!
 */
router.route('/crearperfil').post((req, res, next) => {
    Persona.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

//pedir la info de nuestro perfil
/**
 * @swagger
 * /api/perfil/{id}:
 *  get:
 *      summary: return a user
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: loginId
 *            schema:
 *              type: string
 *            required: true
 *            description: the user id
 *              
 *      responses:
 *          200:
 *              description: get a user!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: user no found!
 */
router.route('/perfil/:id').get((req, res, next) => {
    Persona.findOne({ loginId: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//borrar perfil
/**
 * @swagger
 * /api/perfil/{id}:
 *  delete:
 *      summary: delete a user
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: loginId
 *            schema:
 *              type: string
 *            required: true
 *            description: the user id
 *              
 *      responses:
 *          200:
 *              description: user deleted!
 *          404:
 *              description: user no found!
 */
router.route('/borrar-perfil/:id').delete((req, res, next) => {
    Persona.findOneAndRemove({ loginId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

//updatear la info del perfil
/**
 * @swagger
 * /api/perfil/{id}:
 *  put:
 *      summary: update a user
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: loginId
 *            schema:
 *              type: string
 *            required: true
 *            description: the user id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'          
 *      responses:
 *          200:
 *              description: user updated!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: user no found!
 */
router.route('/actualizar-perfil/:id').put((req, res, next) => {
    Persona.findOneAndUpdate({ loginId: req.params.id }, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Perfil actualizado correctamente!')
        }
    })
});

//traer perfil aleatorio
let user;
router.route('/perfil-aleatorio/:id').get((req,res,next)=>{
     user = Persona.findOne({loginId:req.params.id});
    user.select('likes dislikes')
    user.exec(function (err, user) {
        if (err) return handleError(err);
        Persona.findOne({$and:[{loginId:{$nin :user.likes}},{loginId:{$nin:user.dislikes}}]}, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    
    
});

//dar like a un perfil
router.route('/dar-like/:id1/:id2').put((req,res,next)=>{
    Persona.findOneAndUpdate({loginId:req.params.id1},{$push:{likes : req.params.id2}},(error,user)=>{
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(user)
            console.log('Like añadido correctamente!')
        }
    })
});

router.route('/dar-dislike/:id1/:id2').put((req,res,next)=>{    
    Persona.findOneAndUpdate({loginId:req.params.id1},{$push:{dislikes :req.params.id2}},(error,user)=>{
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(user)
            console.log('Dislike añadido correctamente!')
        }
    })
});

//pedir la info de nuestro perfil
router.route('/perfil/:id').get((req, res,next) => {
    console.log("Entramos al perfil")
    Persona.findOne({loginId:req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
export default router;