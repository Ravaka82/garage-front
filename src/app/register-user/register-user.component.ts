import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../Model/Role';
import { Utilisateur } from '../Model/Utilisateur';
import { RoleServiceService } from '../Service/role-service.service';
import { UtilisateurService } from '../Service/utilisateur.service';
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

  constructor(private _snackBar: MatSnackBar,private roleservice: RoleServiceService,private utilisateurservice: UtilisateurService,private router: Router) { }
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

    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition='start';
    config.panelClass =['snackbar-margin-padding'];

    this.utilisateurservice.creationUtilisateur(this.Utilisateur)
    .subscribe(data => {
      console.log(data);
      this.Utilisateur = new Utilisateur();
      this._snackBar.open("inscription avec succès ✔️✔️ ", 'Close',{
        duration:2000,
      });
      this.gotoList();
    },
    (error: HttpErrorResponse)=>{
      this._snackBar.open( error.error.message , 'Close',{
        duration:5000,
      });
    }
  )};
  onSubmit() {//action boutton
    this.submitted = true;
    this.saveUtilisateur();    
  }
  gotoList() {//chemin redirection
    // this.router.navigate(['/register-user']);
  }
}
