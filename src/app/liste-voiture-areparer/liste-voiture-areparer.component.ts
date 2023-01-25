import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reparation } from '../Model/Reparation';
import { PaiementService } from '../Service/paiement.service';
import { ReparationService } from '../Service/reparation.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-liste-voiture-areparer',
  templateUrl: './liste-voiture-areparer.component.html',
  styleUrls: ['./liste-voiture-areparer.component.css']
})
export class ListeVoitureAreparerComponent {
  nameAtelier: any;
  ListesReparations: Reparation[] = [];
  constructor(private serviceReparation: ReparationService,private paiementservice: PaiementService,private router: Router,private route: ActivatedRoute){
    this.todo = [];
    this.done = [];
  }
  todo!: Reparation[];
  done!: Reparation[];

  ngOnInit(): void {
  this.nameAtelier = localStorage.getItem('idUser');
  this.getListesReparationsParVehicule();

}
  getListesReparationsParVehicule(){
    console.log("vehicule"+this.route.snapshot.paramMap.get('vehicule'))
    this.serviceReparation.getListesReparationsByVehicule(this.route.snapshot.paramMap.get('vehicule'))
    .subscribe(
      data => {
        this.ListesReparations=data;
        console.log("data"+ this.ListesReparations);
      }) 
  }
  drop(event: CdkDragDrop<Reparation[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id === 'cdkDropList-1') {
        this.todo.push(event.previousContainer.data[event.previousIndex]);
      }
      if (event.container.id === 'cdkDropList-2') {
        this.done.push(event.previousContainer.data[event.previousIndex]);
      }
      event.previousContainer.data.splice(event.previousIndex,1);
    }
  }
  
  


  getlien(val: string){
    var t=val.split("\\");
    console.log(t[2]);
    return t[2];
  }
}