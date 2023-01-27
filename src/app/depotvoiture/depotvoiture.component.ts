import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from '../Model/vehicule';
import { DepotVoitureService } from '../Service/depot-voiture.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-depotvoiture',
  templateUrl: './depotvoiture.component.html',
  styleUrls: ['./depotvoiture.component.css']
})
export class DepotvoitureComponent implements OnInit{
 
  Vehicule: Vehicule = new Vehicule();
  submitted = false;
  Vehicules!: Vehicule[];
  NomUser!: any;
  constructor(private _snackBar: MatSnackBar,private depotservice: DepotVoitureService,private router: Router,private route: ActivatedRoute){
   }
  ngOnInit(){
    this.getData();
    this.NomUser = localStorage.getItem('NomUser');
    
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
    this.router.navigate(['DepotVoiture']);
  
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
}
