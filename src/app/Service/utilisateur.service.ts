import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './../Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http:HttpClient){}
  Url1= 'http://localhost:8080/api/auth/signup';

  creationUtilisateur(utilisateur: Utilisateur)
  {
    return this.http.post<Utilisateur>(this.Url1,utilisateur);
  }
}

