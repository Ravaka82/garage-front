import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  constructor(private http:HttpClient){}
  Url1= 'http://localhost:8080/api/vehicule/findVehiculeReparationPayer';
  Url2= 'http://localhost:8080/api/vehicule/findVoitureTerminee';

  getVehiculeReparationPayer()
  {
    return this.http.get<Vehicule[]>(this.Url1);
  }
  
  getVehiculeTerminee()
  {
    return this.http.get<Vehicule[]>(this.Url2);
  }
}
