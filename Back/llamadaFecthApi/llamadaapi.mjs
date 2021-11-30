
import axios from 'axios';
import { response } from 'express';
import { assignDataValue } from '../conectarMongoDB/models.js';
export const generargenterandom=async()=>{
    try{
        return await axios.get('https://randomuser.me/api/?results=200')
        .then(function(response){
            onSuccess(response)        
        })
    } catch (err){
        console.error(err);
    }
}

function onSuccess(response){
    let informacion=response;
    let DBlength=Object.keys(informacion.data.results).length;
    console.log(DBlength);
    for (let i=0; i<DBlength;i++){
        let genero=informacion.data.results[i].gender;
        let nombre=informacion.data.results[i].name.first;
        let apellido=informacion.data.results[i].name.last;
        let calle=informacion.data.results[i].location.street.name;
        let numero=informacion.data.results[i].location.street.number;
        let ciudad=informacion.data.results[i].location.city;
        let estado=informacion.data.results[i].location.state;
        let pais=informacion.data.results[i].location.country;
        let CodP=informacion.data.results[i].location.postcode;
        let latitud=informacion.data.results[i].location.coordinates.latitude;
        let longitud=informacion.data.results[i].location.coordinates.longitude;
        let email=informacion.data.results[i].email;
        let dob=informacion.data.results[i].dob.date;
        let edad=informacion.data.results[i].dob.age;
        let telefono=informacion.data.results[i].phone;
        
        assignDataValue(genero, nombre,apellido,
            calle,numero,ciudad,estado,pais,CodP,latitud,longitud,email,dob,edad,telefono)
    }
}


