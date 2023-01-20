import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../Model/Role';
import { Utilisateur } from '../Model/Utilisateur';
import { RoleServiceService } from '../Service/role-service.service';
import { UtilisateurService } from '../Service/utilisateur.service';
import { LoginService } from '../Service/login.service';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';//fanaovana alert 
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements AfterViewInit {
  Role!: Role[];
  nom!: string;
  Utilisateur: Utilisateur = new Utilisateur();
  submitted = false;

  constructor(private _snackBar: MatSnackBar,private roleservice: RoleServiceService,private utilisateurservice: UtilisateurService,private router: Router,private loginservice: LoginService) { }
  ngAfterViewInit(): void { 
    this.listRole();
  }
  listRole(): void{// findRole
    this. roleservice.getAllRole()
      .subscribe(
        data => {
          this.Role=data;
        })
  }
  saveUtilisateur() {//creation utilisateur
    this.utilisateurservice.creationUtilisateur(this.Utilisateur)
    .subscribe(data => {
      console.log(data);
      this.Utilisateur = new Utilisateur();
      this._snackBar.open("inscription avec succès ✔️✔️ ", 'Close',{
        duration:500000,
        // css matsnack bar dia any amn style.css ny css anreo
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['success-alert']
      });
      this.router.navigate(['login']);
      //this.gotoList();
    },
    (error: HttpErrorResponse)=>{
      this._snackBar.open( error.error.message , 'Close',{
        duration:500000,
        // css matsnack bar dia any amn style.css ny css anreo
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['warning-alert']
      });
    }
  )};
  onSubmit() {//action boutton
    this.submitted = true;
    this.saveUtilisateur();    
  }
  gotoList() {//chemin redirection
     //this.router.navigate(['login']);
  }

  LoginUtilisateur()
  {
   this.loginservice.loginUtilisateur(this.Utilisateur.nom,this.Utilisateur.mot_de_passe)
   .subscribe(
     (data:string) => {
       console.log(data);
       const d=JSON.parse(data);
       localStorage.setItem('idUser',d.id);
       localStorage.setItem('rolesUser',d.roles);
         //redirigen ref tsy mis erreur ka client
       if(d.roles=="ROLE_CLIENT"){
       this.router.navigate(['/acceuil']);
       }
       //redirigen ref tsy mis erreur ka financier
       if(d.roles=="ROLE_RESPONSABLE_FINANCIER"){
        this.router.navigate(['/acceuilfinancier']);
       }
       //redirigen ref tsy mis erreur ka atelier
       if(d.roles=="ROLE_RESPONSABLE_ATELIER"){
        this.router.navigate(['/acceuilatelier']);
       }
      
     },
     //message d'erreur
     (error: HttpErrorResponse)=>{
       const fd= JSON.parse(error.error);
      this._snackBar.open( fd.message , 'Close',{
        duration:500000,
        // css matsnack bar dia any amn style.css ny css anreo
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['warning-alert']
      });
    }) 
   }
   //fonction antsoina eo am form login
   boutonLogin(){
    this.submitted = true;
    this.LoginUtilisateur();  
   }
}
