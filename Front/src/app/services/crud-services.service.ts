import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { Persona } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class CrudServicesService {
    // Node/Express API
    REST_API: string = 'http://localhost:8080/api';

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private httpClient: HttpClient) {}

    //Crear usuario con la info del formulario
    addnewuser(data: Persona): Observable<any> {
        //llama a la url de la API y le pasa los datos
        let API_URL = `${this.REST_API}/crearperfil`;
        return this.httpClient.post(API_URL, data);
    }

    //traer perfil cuando se hace login
    showuserprofile(loginId: any): Observable<any> {
        let API_URL = `${this.REST_API}/perfil/${loginId}`;
        return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
            map((res: any) => {
                return res || {};
            }),
            catchError(this.handleError)
        );
    }

    // Borrar el perfil de usuario
    deleteUserProfile(loginId: any): Observable<any> {
        let API_URL = `${this.REST_API}/borrar-perfil/${loginId}`;
        return this.httpClient
            .delete(API_URL, { headers: this.httpHeaders })
            .pipe(catchError(this.handleError));
    }

    // Editar perfil del usuario
    updateUserProfile(loginId: any, data: any): Observable<any> {
        let API_URL = `${this.REST_API}/actualizar-perfil/${loginId}`;
        return this.httpClient
            .put(API_URL, data, { headers: this.httpHeaders })
            .pipe(catchError(this.handleError));
    }

<<<<<<< HEAD
    //traer persona aleatoria
    getRandomUser(loginId: any): Observable<any> {
        let API_URL = `${this.REST_API}/perfil-aleatorio/${loginId}`;
        const personarandom = this.httpClient.get(API_URL, {
            headers: this.httpHeaders,
        });
        return personarandom.pipe(
            map((res: any) => {
                return res || {};
            }),
            catchError(this.handleError)
        );
    }
    //tratamiento de errores
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Handle client error
            errorMessage = error.error.message;
        } else {
            // Handle server error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => new Error(errorMessage));
=======
  //traer persona aleatoria
  getRandomUser(loginId:any):Observable<any>{
    let API_URL = `${this.REST_API}/perfil-aleatorio/${loginId}`;
    const personarandom=this.httpClient.get(API_URL, { headers: this.httpHeaders })
    return personarandom
     .pipe(map((res: any) => {
         return res || {}
       }),
       catchError(this.handleError)
     )
  }

  //dar like
  likeUser(loginId:any,randUserId:any):Observable<any>{
    let API_URL = `${this.REST_API}/dar-like/${loginId}`;
    return this.httpClient.put(API_URL, randUserId, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }

  //dar dislike
  dislikeUser(loginId:any,randUserId:any):Observable<any>{
    let API_URL = `${this.REST_API}/dar-dislike/${loginId}`;
    return this.httpClient.put(API_URL, randUserId, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }

  //tratamiento de errores
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
>>>>>>> 766091dbe67381797bf86220fc6009a600a4822a
    }
}
