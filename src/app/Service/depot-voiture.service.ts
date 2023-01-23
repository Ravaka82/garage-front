import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Reparation } from '../Model/Reparation';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  constructor(private http:HttpClient) { }
  UrlDepot= 'http://localhost:8080/api/vehicule/createVehicule';
  Url2 = 'http://localhost:8080/api/vehicule/findVoitureClient';
  url3 = 'http://localhost:8080/api/vehicule/findVoitureValide'; 
  Url4 = 'http://localhost:8080/api/reparation/deleteReparation';
  Url5 = 'http://localhost:8080/api/reparation/findReparationById';
  Url6 = 'http://localhost:8080/api/reparation/listeDepotVoitureParVoiture';

  DepotVoiture(vehicule: Vehicule)
  {
    
    return this.http.post<Vehicule>(this.UrlDepot,vehicule);
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
