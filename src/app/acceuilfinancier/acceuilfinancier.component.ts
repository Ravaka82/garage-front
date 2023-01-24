import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from '../Model/Paiement';
import { Utilisateur } from '../Model/Utilisateur';
import { Vehicule } from '../Model/vehicule';
import { PaiementService } from '../Service/paiement.service';

@Component({
  selector: 'app-acceuilfinancier',
  templateUrl: './acceuilfinancier.component.html',
  styleUrls: ['./acceuilfinancier.component.css']
})
export class AcceuilfinancierComponent implements OnInit{
  nameFinancier: any;
  ListesPaiementAttente!: Paiement[];
  Vehicule: Vehicule = new Vehicule();
  Utilisateur: Utilisateur = new Utilisateur();

  constructor(private paiementservice: PaiementService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
  this.nameFinancier = localStorage.getItem('idUser');
  this.getListesVehiculeEnAttente();
  }

  getListesVehiculeEnAttente(){
    this.paiementservice.getReparationVehiculePayerEnAttente()
      .subscribe(
      data => {
        this.ListesPaiementAttente=data;
      })
  }
  getlien(val: string){
    var t=val.split("\\");
    console.log(t[2]);
    return t[2];
  }
}
