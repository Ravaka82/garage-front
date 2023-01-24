import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../Model/Paiement';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  constructor(private http: HttpClient) { }
  UrlDepot= 'http://localhost:8080/api/paiement/validerPaiement';
  url2='http://localhost:8080/api/paiement/findVehiculeEnAttente';
  Url3='http://localhost:8080/api/paiement/accepterPaiement';

  ValidationPaiement(vehicule: String, prix: number) {
    return this.http.post<Paiement>(this.UrlDepot, {vehicule, prix});
  }
  getReparationVehiculePayerEnAttente()
  {
    return this.http.get<Paiement[]>(this.url2);
  }
  ValidationPaiementEnAttente(vehicule: String){
    return this.http.post<Paiement>(this.Url3, {vehicule});
  }
}