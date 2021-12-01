
import axios from 'axios';
import { response } from 'express';
import { assignDataValue } from '../estructuraDocumentosBBDD/models.js';
export const generargenterandom=async()=>{
    try{
        return await axios.get('https://randomuser.me/api/?results=100&nat=es')
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
        let gender=informacion.data.results[i].gender;
        let name=informacion.data.results[i].name.first;
        let city=informacion.data.results[i].location.city;
        let country=informacion.data.results[i].location.country;
        // let latitud=informacion.data.results[i].location.coordinates.latitude;
        // let longitud=informacion.data.results[i].location.coordinates.longitude;
        let dob=informacion.data.results[i].dob.date;
        let image=informacion.data.results[i].picture.large;
        assignDataValue(gender, name,city,country,dob,image)
    }
}


