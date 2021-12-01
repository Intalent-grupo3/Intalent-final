import mongoose from "mongoose";
var repSchema = mongoose.Schema({
    id:String,
    gender: String,
    name: String,
    city: String,
    country: String,
    // latitud: String,
    // longitud: String,
    dob: Date,
    bio: String,
    image :String,
    likes:[],
    dislikes: [],
    topics:[],
})
export var Persona = mongoose.model('Persona', repSchema);
export function assignDataValue(gender, name,city,country,dob,image,bio,topics) {
    var upData = new Persona()
    upData.gender = gender;
    upData.name = name;
    upData.city = city;
    upData.country = country;
    // upData.latitud = latitud;
    // upData.longitud = longitud;
    upData.dob = dob;
    upData.image=image;
    upData.topics=topics;
    upData.save();
}