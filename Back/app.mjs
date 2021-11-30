import express from 'express';
//función que genera las personas aleatorias
import botsRouter from './routes/bots.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

//puerto de conexión
const port=process.env.PORT || 8080;

//middlewares
app.use('/api',botsRouter)

//atlas connection
mongoose.connect(process.env.ATLAS_URI)
.then(()=>console.log ("Conectado a Atlas"))
.catch((error)=>console.log(error));

//puerto escucha
app.listen(port,function(){console.log("Esta escuchando por donde queremos")});