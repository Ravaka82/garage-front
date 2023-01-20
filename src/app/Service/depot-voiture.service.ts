import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  constructor(private http:HttpClient) { }
  UrlDepot= 'http://localhost:8080/api/vehicule/createVehicule';
  Url2 = 'http://localhost:8080/api/vehicule/findVoitureClient';
  url3 = 'http://localhost:8080/api/vehicule/findVoitureValide';

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
}
