import { Component } from '@angular/core';
import { AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../Model/Role';
import { RoleServiceService } from '../Service/role-service.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements AfterViewInit {
  Role!: Role[];
  nom!: string;
  constructor(private roleservice: RoleServiceService,private router: Router) { }
  ngAfterViewInit(): void { 
    this.listRole();
  }
  listRole(): void{
    this. roleservice.getAllRole()
      .subscribe(
        data => {
          this.Role=data;
        })
   }
}
