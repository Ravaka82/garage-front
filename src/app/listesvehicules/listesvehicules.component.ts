import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../Model/Vehicule';
import { DepotVoitureService } from '../Service/depot-voiture.service';

@Component({
  selector: 'app-listesvehicules',
  templateUrl: './listesvehicules.component.html',
  styleUrls: ['./listesvehicules.component.css']
})
export class ListesvehiculesComponent implements OnInit{
  Vehicule: Vehicule = new Vehicule();
  listeVehicule!: Vehicule[];

  constructor(private depotservice: DepotVoitureService){ }

  ngOnInit(): void {

    this.listesVehiculesValide();
    
  }
  listesVehiculesValide(){
      this.Vehicule.utilisateurId=localStorage.getItem('idUser');
      this.depotservice.getListeVoituresValide(this.Vehicule.utilisateurId)
      .subscribe(
        data => {
          this.listeVehicule=data;
          console.log(data);
        }) 
  }
  getlien(val: string){
    var t=val.split("\\");
    //console.log(t[2]);
    return t[2];
  }

}
