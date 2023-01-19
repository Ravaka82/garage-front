import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { DepotVoitureService } from '../Service/depot-voiture.service';
import { Router } from '@angular/router';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';//fanaovana alert 
import { HttpErrorResponse } from '@angular/common/http';
import { TypeReparationService } from '../Service/type-reparation.service';
import { TypeReparation } from '../Model/TypeReparation';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
 
  Vehicule: Vehicule = new Vehicule();
  submitted = false;
  TypeReparation!: TypeReparation[];
  Vehicules!: Vehicule[];
  nomVehicule!: string;
  
  constructor(private _snackBar: MatSnackBar,private depotservice: DepotVoitureService,private typeReparationservice: TypeReparationService,private router: Router) { }
ngOnInit(){
  this.getData();
  this.listReparartion();
  this.getOneVoitureClient();
}
getData(){
  let f=localStorage.getItem('idUser');
  //console.log(f);
  //console.log("acceuil");
  return f;
 
}
saveDepotVoiture() {
  this.Vehicule.utilisateurId=localStorage.getItem('idUser');
  console.log(this.Vehicule.utilisateurId);
  this.depotservice.DepotVoiture(this.Vehicule)
  .subscribe(data => {
    console.log(data);
   console.log(this.Vehicule.nom);
    this.Vehicule = new Vehicule();
    
    this._snackBar.open("Dépot de voiture avec succès ✔️✔️ ", 'Close',{
      duration:500000,
      // css matsnack bar dia any amn style.css ny css anreo
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['success-alert']
    });
    this.router.navigate(['acceuil']);
  
  },
  (error: HttpErrorResponse)=>{
    this._snackBar.open( error.error.message , 'Close',{
      duration:500000,
      // css matsnack bar dia any amn style.css ny css anreo
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['warning-alert']
    });
  }
)};
boutonsaveDepot() {//action boutton
  this.submitted = true;
  this.saveDepotVoiture();    
}
listReparartion(): void{//function liste
  this.typeReparationservice.getAllTypeReparation()
    .subscribe(
      data => {
        this.TypeReparation=data;
      })
 }
 getOneVoitureClient(){
  this.Vehicule.utilisateurId=localStorage.getItem('idUser');
  // console.log(this.Vehicule.utilisateurId)
  this.depotservice.getOneVoitureClient(this.Vehicule.utilisateurId)
  .subscribe(
    data => {
      this.Vehicules=data;
      console.log(data);
    })
 }
}
