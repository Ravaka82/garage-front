import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuilfinancier',
  templateUrl: './acceuilfinancier.component.html',
  styleUrls: ['./acceuilfinancier.component.css']
})
export class AcceuilfinancierComponent implements OnInit{
  nameFinancier: any;
  ngOnInit(): void {
  this.nameFinancier = localStorage.getItem('idUser');
  }

}
