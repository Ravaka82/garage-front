import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../Model/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  constructor(private http:HttpClient){}
  Url1= 'http://localhost:8080/api/role/findRole';

  getAllRole()
  {
    return this.http.get<Role[]>(this.Url1);
  }
}
