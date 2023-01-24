import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reparation } from '../Model/Reparation';
import { Vehicule } from '../Model/vehicule';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  constructor(private http:HttpClient) { }
  Url1='http://localhost:8080/api/reparation/createReparation';
  Url2='http://localhost:8080/api/reparation/findDepotReparationParVoiture';
  url3='http://localhost:8080/api/reparation/listeVehiculeDepot';
  creationReparation(reparation: Reparation)
  {
    console.log(reparation._id)
    console.log(reparation.avancement);
    console.log(reparation.statusUneReparation);
    // console.log(reparation.typeReparationId);
    // console.log(reparation.vehiculeId)
    return this.http.post<Reparation>(this.Url1,reparation);
  }
  getListeVoituresDeposer(utilisateurId: any){
    const repons =this.http.get<Reparation[]>(`${this.Url2}/${utilisateurId}`);
    return repons;
  } 
  getListeVehiculeDeposer(utilisateurId: any){
    const repons =this.http.get<Vehicule[]>(`${this.url3}/${utilisateurId}`);
    return repons;
  } 
}