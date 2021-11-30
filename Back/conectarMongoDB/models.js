import mongoose from "mongoose";
var repSchema = mongoose.Schema({
    genero: String,
    nombre: String,
    apellido: String,
    calle: String,
    numero: String,
    ciudad: String,
    estado: String,
    pais: String,
    CodP: String,
    latitud: String,
    longitud: String,
    email: String,
    dob: Date,
    edad: String,
    telefono: String

})
export var Persona = mongoose.model('Persona', repSchema);
export function assignDataValue(genero, nombre,apellido,
    calle,numero,ciudad,estado,pais,CodP,latitud,longitud,email,dob,edad,telefono) {
    var upData = new Persona()
    upData.genero = genero;
    upData.nombre = nombre;
    upData.apellido = apellido;
    upData.calle = calle;
    upData. numero= numero;
    upData.ciudad = ciudad;
    upData.estado = estado;
    upData.pais = pais;
    upData.CodP = CodP;
    upData.latitud = latitud;
    upData.longitud = longitud;
    upData.email = email;
    upData.dob = dob;
    upData.edad = edad;
    upData.telefono = telefono;
    upData.save();
}