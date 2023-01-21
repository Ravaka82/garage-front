import { Component } from '@angular/core';
import { Reparation } from '../Model/Reparation';
import { Vehicule } from '../Model/vehicule';
import { ReparationService } from '../Service/reparation.service';

@Component({
  selector: 'app-listes-vehicule-deposer',
  templateUrl: './listes-vehicule-deposer.component.html',
  styleUrls: ['./listes-vehicule-deposer.component.css']
})
export class ListesVehiculeDeposerComponent {
  Reparation: Reparation = new Reparation();
  listeReparation!: Reparation[];
  Vehicule: Vehicule = new Vehicule();
  constructor(private reparationservice: ReparationService){ }

  ngOnInit(): void {
    this.Vehicule.utilisateurId=localStorage.getItem('idUser');
    this.listesVehiculesDeposer();
    
  }
  listesVehiculesDeposer(){
      this.Vehicule.utilisateurId=localStorage.getItem('idUser');
      this.reparationservice.getListeVoituresDeposer(this.Vehicule.utilisateurId)
      .subscribe(
        data => {
          this.listeReparation=data;
          console.log(data);
        }) 
  }
  getlien(val: string){
    var t=val.split("\\");
    console.log(t[2]);
    return t[2];
  }

}