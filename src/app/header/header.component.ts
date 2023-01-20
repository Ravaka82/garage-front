import { Component,OnInit } from '@angular/core';
import { Utilisateur } from '../Model/Utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  Utilisateur: Utilisateur = new Utilisateur();
  constructor(private router: Router){ }
ngOnInit(): void {

}
deconnexion() {
  localStorage.removeItem('idUser');
  this.router.navigate(['Garage']);
}
}
