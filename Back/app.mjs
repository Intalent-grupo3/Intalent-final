import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//función que genera las personas aleatorias
import botsRouter from './routes/routes.js';

//Para que la conexión a Atlas sea con una variable de entorno segura
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

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