import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepotVoitureService } from '../Service/depot-voiture.service';
import { Reparation } from '../Model/Reparation';
import { Vehicule } from '../Model/vehicule';

@Component({
  selector: 'app-listesreparationsparvehicule',
  templateUrl: './listesreparationsparvehicule.component.html',
  styleUrls: ['./listesreparationsparvehicule.component.css']
})
export class ListesreparationsparvehiculeComponent implements OnInit {
  Vehicule: Vehicule = new Vehicule();
  AllReparation!: Reparation[];
  displayStyle = "none";
  pages: number = 1;
  totallength: any;
  constructor(private depotVoitureService: DepotVoitureService,private router: Router,private route: ActivatedRoute){
  }
ngOnInit(): void {
  this.getListesReparationsParVehicule();
}
getListesReparationsParVehicule(){
  this.Vehicule.utilisateurId=localStorage.getItem('idUser');
  this.depotVoitureService.getListeReparationParVehicule(this.Vehicule.utilisateurId,this.route.snapshot.paramMap.get('id'))
  .subscribe(
    data => {
      this.AllReparation=data;
      console.log(data);
    }) 
}
pageChange(newPage: number){
  this.router.navigate([''],{queryParams: {page: newPage}});
}
openPopup(_id:any) {
  this.depotVoitureService.getListeReparationByReparation(_id)
    .subscribe(
      data => {
        this.AllReparation=data;
        console.log(data);
      }) 
  this.displayStyle = "block";
  this.getListesReparationsParVehicule()
}
closePopup() {
  this.displayStyle = "none";
}
confirme(_id:string){
console.log(_id);
this.depotVoitureService.deleteReparation(_id)
.subscribe(
  data => {
    this.getListesReparationsParVehicule();
    this.closePopup();
    console.log(data);
  }) 
}
}
