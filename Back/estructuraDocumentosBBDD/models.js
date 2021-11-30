import mongoose from "mongoose";
var repSchema = mongoose.Schema({
    genero: String,
    nombre: String,
    ciudad: String,
    pais: String,
    // latitud: String,
    // longitud: String,
    dob: Date,
    edad: String,
    bio: String,
    imagen :String,
    likes:[],
    dislikes: [],
    topics:[],
})
export var Persona = mongoose.model('Persona', repSchema);
export function assignDataValue(genero, nombre,ciudad,pais,dob,edad,imagen,bio,topics) {
    var upData = new Persona()
    upData.genero = genero;
    upData.nombre = nombre;
    upData.ciudad = ciudad;
    upData.pais = pais;
    // upData.latitud = latitud;
    // upData.longitud = longitud;
    upData.dob = dob;
    upData.edad = edad;
    upData.imagen=imagen;
    upData.bio=bio;
    upData.topics=topics;
    upData.save();
}