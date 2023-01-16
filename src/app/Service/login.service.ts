import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}
  Url= 'http://localhost:8081/api/auth/signin';

  loginUtilisateur(nom:string,mot_de_passe:string){
    let params = new HttpParams();
    params = params.set('nom', nom);
    params = params.set('mot_de_passe', mot_de_passe);
    return this.http.post(this.Url, params,{responseType: 'text'});
  }
}
