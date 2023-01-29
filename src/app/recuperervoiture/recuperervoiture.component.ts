import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from '../Model/vehicule';
import { VehiculeService } from '../Service/vehicule.service';

@Component({
  selector: 'app-recuperervoiture',
  templateUrl: './recuperervoiture.component.html',
  styleUrls: ['./recuperervoiture.component.css']
})
export class RecuperervoitureComponent implements OnInit{
    Vehicule: Vehicule = new Vehicule;
    pages: number = 1;
    totallength: any;
    ListesVehicule!: Vehicule[];
    constructor(private servicevehicule: VehiculeService,private router: Router,private route: ActivatedRoute){
     }
  
    ngOnInit(): void {
      this.Vehicule.utilisateurId=localStorage.getItem('idUser');
      this.getListesVehiculeRecuperer();
      
    }
    
    getListesVehiculeRecuperer(){//listes vehicule à réparer
      this.Vehicule.utilisateurId=localStorage.getItem('idUser');
  this.servicevehicule.getListesVehiculeRecuperer(this.Vehicule.utilisateurId).subscribe(
    data => {
      this.ListesVehicule=data;
      console.log(data);
      this.totallength= this.ListesVehicule.length;
    }) 
    }
    pageChange(newPage: number){
      this.router.navigate([''],{queryParams: {page: newPage}});
    }
    getlien(val: string){
      var t=val.split("\\");
      console.log(t[2]);
      return t[2];
    } 
  }
