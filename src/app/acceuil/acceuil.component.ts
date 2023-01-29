import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../Model/vehicule';
import { DepotVoitureService } from '../Service/depot-voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';//fanaovana alert 
import { HttpErrorResponse } from '@angular/common/http';
import { TypeReparationService } from '../Service/type-reparation.service';
import { TypeReparation } from '../Model/TypeReparation';
import { Reparation } from '../Model/Reparation';
import { ReparationService } from '../Service/reparation.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
 
  Vehicule: Vehicule = new Vehicule();
  Reparations: Reparation = new Reparation();
  submitted = false;
  TypeReparation!: TypeReparation[];
  Vehicules!: Vehicule[];
  nomVehicule!: string;
  vehiculeId: any;
  NomUser :any;
  pages: number = 1;
  totallength: any;
  config: any;
  selectedFile!: File;
  constructor(private _snackBar: MatSnackBar,private reparationservice : ReparationService,private depotservice: DepotVoitureService,private typeReparationservice: TypeReparationService,private router: Router,private route: ActivatedRoute){
   }
  ngOnInit(){
    this.getData();
    this.listReparartion();
    this.getOneVoitureClient();
    this.NomUser = localStorage.getItem('NomUser');
    
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }

getData(){
  let f=localStorage.getItem('idUser');
  //console.log(f);
  //console.log("acceuil");
  return f;
 
}
onFileSelected(event:any) {
  this.selectedFile = <File>event.target.files[0];
}
boutonsaveDepot() {
  this.Vehicule.utilisateurId=localStorage.getItem('idUser');
    const nom = this.Vehicule.nom;
    const type = this.Vehicule.type;
    const immatriculation = this.Vehicule.immatriculation;
    const image = this.selectedFile;
    const utilisateurId= this.Vehicule.utilisateurId;
    this.depotservice.depotVoiture(nom, type, image, immatriculation, utilisateurId).subscribe(
      (response) => {
        console.log(response);
        this._snackBar.open(" insertion vehicule avec succès ✔️✔️ ", 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-alert']
        });
      },
      (error) => {
        // handle the error
        console.log(error)
      });    
  }

listReparartion(): void{//function liste
  this.typeReparationservice.getAllTypeReparation()
    .subscribe(
      data => {
        this.TypeReparation=data;
        this.totallength = this.TypeReparation.length;
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
 setVehiculeAndTypeReparationId(vehiculeId: any, typeReparationId: any) {
  this.Reparations.vehicule = vehiculeId;
  this.Reparations.typeReparation = typeReparationId;
}
getListeDepotVoiture(){
  console.log(this.Reparations);
  console.log(  this.Vehicule._id  );
  console.log("utilisateur"+localStorage.getItem('idUser'));
  // this.vehiculeId = this.Vehicule.id ;
  // console.log( this.vehiculeId );
  this.reparationservice.creationReparation(this.Reparations)
  .subscribe(data => {
    console.log(data);
    this.Reparations = new Reparation();
    this._snackBar.open("A REPARER ✔️✔️", 'Close',{
      duration:2000,
      // css matsnack bar dia any amn style.css ny css anreo
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['success-alert']
    });
    this.router.navigate(['acceuil']);
  },
  (error: HttpErrorResponse)=>{
    this._snackBar.open( error.error.message , 'Close',{
      duration:2000,
      // css matsnack bar dia any amn style.css ny css anreo
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['warning-alert']
    });
  }
)};
listeTypeReparationChoisis(){
  this.router.navigate(['listesVehiculesDeposer']);
}
}
