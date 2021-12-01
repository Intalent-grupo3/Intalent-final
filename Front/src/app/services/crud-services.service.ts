import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Persona } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {
   // Node/Express API
   REST_API: string = 'http://localhost:8080/api';
 
   // Http Header
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

    //Crear usuario con la info del formulario
   addnewuser(data:Persona):Observable<any>{
     //llama a la url de la API y le pasa los datos
     let API_URL = `${this.REST_API}/crearperfil`;
      return this.httpClient.post(API_URL, data);
   }

  //  //traer perfil cuando se hace login
  //  showuserprofile(id:any):Observable<any>{
  //    let API_URL = `${this.REST_API}/perfil`;
  //  }
}
