import { express } from "express";
var app = express();
app.use(express.json());
export const router = express.Router();
import {generargenterandom} from './llamadaFecthApi/llamadaapi.mjs';
//ruta de generar los usuarios
router.route('/').post((req, res, next)=>{
    generargenterandom()
});
