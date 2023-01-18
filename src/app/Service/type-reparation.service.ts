import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeReparation } from '../Model/TypeReparation';

@Injectable({
  providedIn: 'root'
})
export class TypeReparationService {
  constructor(private http:HttpClient){}
  Url1= 'http://localhost:8080/api/typeReparation/findTypeReparation';

  getAllTypeReparation()
  {
    return this.http.get<TypeReparation[]>(this.Url1);
  }
}
