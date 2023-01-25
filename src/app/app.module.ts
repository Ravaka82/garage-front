
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import{MatTabsModule} from '@angular/material/tabs';
import{MatFormFieldModule}from '@angular/material/form-field';
import{ MatInputModule}from '@angular/material/input';
import{MatButtonModule}from '@angular/material/button';
import{MatCheckboxModule}from '@angular/material/checkbox';
import{MatIconModule}from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListesvehiculesComponent } from './listesvehicules/listesvehicules.component';
import { AcceuilfinancierComponent } from './acceuilfinancier/acceuilfinancier.component';
import { AcceuilatelierComponent } from './acceuilatelier/acceuilatelier.component';
import { ListesVehiculeDeposerComponent } from './listes-vehicule-deposer/listes-vehicule-deposer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListesreparationsparvehiculeComponent } from './listesreparationsparvehicule/listesreparationsparvehicule.component';
import { ListesreparationsattenteComponent } from './listesreparationsattente/listesreparationsattente.component';
import { ListeVoitureAreparerComponent } from './liste-voiture-areparer/liste-voiture-areparer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    AcceuilComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    ListesvehiculesComponent,
    AcceuilfinancierComponent,
    AcceuilatelierComponent,
    ListesVehiculeDeposerComponent,
    ListesreparationsparvehiculeComponent,
    ListesreparationsattenteComponent,
    ListeVoitureAreparerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    NgxPaginationModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
