import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Reparation } from '../Model/Reparation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {
  private url = 'http://localhost:8080/api/vehicule/createVehicule';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http:HttpClient) { }
  UrlDepot='http://localhost:8080/api/vehicule/createVehicule';
  Url2 = 'http://localhost:8080/api/vehicule/findVoitureClient';
  url3 = 'http://localhost:8080/api/vehicule/findVoitureValide'; 
  Url4 = 'http://localhost:8080/api/reparation/deleteReparation';
  Url5 = 'http://localhost:8080/api/reparation/findReparationById';
  Url6 = 'http://localhost:8080/api/reparation/listeDepotVoitureParVoiture';

  depotVoiture(nom: string,type: string, file: File, immatriculation: string, utilisateurId: any){
    const formData = new FormData();
      formData.append('nom',nom);
      formData.append('type',type);
      formData.append('image',file);
      formData.append('immatriculation',immatriculation);
      formData.append('utilisateurId',utilisateurId);
      console.log(formData)
    return this.http.post<Vehicule>(this.url,formData);
  }
  getOneVoitureClient(utilisateurId: any){
    const res = this.http.get<Vehicule[]>(`${this.Url2}/${utilisateurId}`);
    console.log(res)
    return res;
  }
  getListeVoituresValide(utilisateurId: any){
    const repons =this.http.get<Vehicule[]>(`${this.url3}/${utilisateurId}`);
    return repons;
  } 
  deleteReparation(_id:any){
    return this.http.delete<void>(`${this.Url4}/${_id}`);
  }
  getListeReparationByReparation(_id:any){
    const repons =this.http.get<Reparation[]>(`${this.Url5}/${_id}`);
    return repons;
  }
  getListeReparationParVehicule(utilisateur:any , vehicule: any){
    const repons =this.http.get<Reparation[]>(`${this.Url6}/${utilisateur}/${vehicule}`);
    return repons;
  }
}
