import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  constructor(private http:HttpClient) { }
  UrlDepot= 'http://localhost:8080/api/vehicule/createVehicule';

  DepotVoiture(vehicule: Vehicule)
  {
    
    return this.http.post<Vehicule>(this.UrlDepot,vehicule);
  }
}
