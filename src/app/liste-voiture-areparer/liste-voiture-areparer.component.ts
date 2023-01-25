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
  ListesReparations!: Reparation[];
  constructor(private serviceReparation: ReparationService,private paiementservice: PaiementService,private router: Router,private route: ActivatedRoute){}
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

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
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  getlien(val: string){
    var t=val.split("\\");
    console.log(t[2]);
    return t[2];
  }
}