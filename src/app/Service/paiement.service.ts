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

  ValidationPaiement(vehicule: String, prix: number) {
    return this.http.post<Paiement>(this.UrlDepot, {vehicule, prix});
  }
}