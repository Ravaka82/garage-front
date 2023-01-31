import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Reparation } from '../Model/Reparation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {
  private baseUrl = environment.apiUrl;
  private url = `${this.baseUrl}/vehicule/createVehicule`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http:HttpClient) { }
  UrlDepot=`${this.baseUrl}/vehicule/createVehicule`;
  Url2 = `${this.baseUrl}/vehicule/findVoitureClient`;
  url3 = `${this.baseUrl}/vehicule/findVoitureValide`;
  Url4 = `${this.baseUrl}/reparation/deleteReparation`;
  Url5 = `${this.baseUrl}/reparation/findReparationById`;
  Url6 = `${this.baseUrl}/reparation/listeDepotVoitureParVoiture`;

  depotVoiture(nom: string,type: string, file: File, immatriculation: string, utilisateurId: any){
    const formData = new FormData();
      formData.append('nom',nom);
      formData.append('type',type);
      formData.append('image',file);
      formData.append('immatriculation',immatriculation);
      formData.append('utilisateurId',utilisateurId);
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form/data');

      console.log(formData)
    return this.http.post<Vehicule>(this.url,formData,{headers});
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
