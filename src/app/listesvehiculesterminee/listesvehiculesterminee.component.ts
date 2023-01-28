import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../Model/Utilisateur';
import { Vehicule } from '../Model/vehicule';
import { VehiculeService } from '../Service/vehicule.service';

@Component({
  selector: 'app-listesvehiculesterminee',
  templateUrl: './listesvehiculesterminee.component.html',
  styleUrls: ['./listesvehiculesterminee.component.css']
})
export class ListesvehiculestermineeComponent {                                              
  vehiculeTerminee!: Vehicule[];
  Utilisateur: Utilisateur = new Utilisateur();
  pages: number = 1;
  totallength: any;

  constructor(private servicevehicule:VehiculeService ,private router: Router) { }

  ngOnInit(): void {
    this.getListesVehiculesterminee();
  }
  
  getListesVehiculesterminee(){
      this.servicevehicule.getVehiculeTerminee()
      .subscribe(
        data => {
          this.vehiculeTerminee=data;
          this.totallength= this.vehiculeTerminee.length;
          console.log(data);
        }) 
  }
  getlien(val: string){
    var t=val.split("\\");
    console.log(t[2]);
    return t[2];
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}