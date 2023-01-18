import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeReparation } from '../Model/TypeReparation';
import { TypeReparationService } from '../Service/type-reparation.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  TypeReparation!: TypeReparation[];
  constructor(private typeReparationservice: TypeReparationService,private router: Router) { }

  ngOnInit(): void{
    this.listRegion();
  }
  
  listRegion(): void{//function liste
    this.typeReparationservice.getAllTypeReparation()
      .subscribe(
        data => {
          this.TypeReparation=data;
        })
   }
}
