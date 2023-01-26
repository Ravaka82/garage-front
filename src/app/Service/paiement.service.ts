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
  Url4='http://localhost:8080/api/paiement/getAllPaiementValider';
  Url5='http://localhost:8080/api/paiement/sender';

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
  getListeVoitureValider(){
    return this.http.get<Paiement[]>(this.Url4);
  }
  sendMail(to:string, subject:string, text:string, file: File, filename:string){
    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('text', text);
    formData.append('file', file);
    formData.append('filename', filename);
    console.log(formData.getAll)
    return this.http.post<Paiement>(this.Url5, formData);
}
}