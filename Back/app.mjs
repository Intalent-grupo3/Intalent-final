import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

//para swagger
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//función que genera las personas aleatorias
import botsRouter from './routes/routes.js';

//Para que la conexión a Atlas sea con una variable de entorno segura
import dotenv from 'dotenv';
dotenv.config();

//configuracion de swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MongoDB Api",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/routes.js")}`]
}

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

//puerto de conexión
const port = process.env.PORT || 8080;

//middlewares
app.use('/api', botsRouter)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))

//atlas connection
mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log("Conectado a Atlas"))
    .catch((error) => console.log(error));

//puerto escucha
app.listen(port, function () { console.log("Esta escuchando por donde queremos") });