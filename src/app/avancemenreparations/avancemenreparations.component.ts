import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reparation } from '../Model/Reparation';
import { ReparationService } from '../Service/reparation.service';

@Component({
  selector: 'app-avancemenreparations',
  templateUrl: './avancemenreparations.component.html',
  styleUrls: ['./avancemenreparations.component.css']
})
export class AvancemenreparationsComponent implements OnInit{
    ListesReparations!: Reparation[];
    pages: number = 1;
    totallength: any;
  
    constructor(private serviceReparation: ReparationService,private router: Router,private route: ActivatedRoute){
    }
    
    ngOnInit(): void {
      this.getAllReparations();
  }
    getAllReparations(){
      console.log("vehicule"+this.route.snapshot.paramMap.get('vehicule'))
      this.serviceReparation.getListesReparationsByVehicule(this.route.snapshot.paramMap.get('vehicule'))
      .subscribe(
        data => {
          this.ListesReparations=data;
        }) 
    }
    pageChange(newPage: number){
      this.router.navigate([''],{queryParams: {page: newPage}});
    }
}
