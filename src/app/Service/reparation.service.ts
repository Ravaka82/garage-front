import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reparation } from '../Model/Reparation';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  constructor(private http:HttpClient) { }
  Url1='http://localhost:8080/api/reparation/createReparation';

  creationReparation(reparation: Reparation)
  {
    console.log(reparation._id)
    console.log(reparation.avancement);
    console.log(reparation.statusUneReparation);
    console.log(reparation.typeReparationId);
    console.log(reparation.vehiculeId)
    return this.http.post<Reparation>(this.Url1,reparation);
  }
}