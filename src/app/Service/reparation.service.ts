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
  url4='http://localhost:8080/api/reparation/getReparationParVehicule';
  url5='http://localhost:8080/api/reparation/updateOneReparationEncours';
  url6='http://localhost:8080/api/reparation/getReparationAFaire';
  url7='http://localhost:8080/api/reparation/getReparationEnCours';

  creationReparation(reparation: Reparation)
  {
    console.log(reparation._id)
    //console.log(reparation.avancement);
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
  getListesReparationsByVehicule(vehicule: any){
    const val =this.http.get<Reparation[]>(`${this.url4}/${vehicule}`);
    return val;
  }
  updateOneReparationEncours(_id:any){
    const val =this.http.post<Reparation>(`${this.url5}/${_id}`,null);
    return val;
  }
  getReparationAFaire(vehicule: any){
    const val =this.http.get<Reparation[]>(`${this.url6}/${vehicule}`);
    return val;
  }
  getReparationEnCours(vehicule: any){
    const val =this.http.get<Reparation[]>(`${this.url7}/${vehicule}`);
    return val;
  }
}