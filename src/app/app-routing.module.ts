import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TemplateComponent } from './template/template.component';
import { ListesvehiculesComponent } from './listesvehicules/listesvehicules.component';
import { AcceuilfinancierComponent } from './acceuilfinancier/acceuilfinancier.component';
import { AcceuilatelierComponent } from './acceuilatelier/acceuilatelier.component';
import { ListesVehiculeDeposerComponent } from './listes-vehicule-deposer/listes-vehicule-deposer.component';
import { ListesreparationsparvehiculeComponent } from './listesreparationsparvehicule/listesreparationsparvehicule.component';
import { ListesreparationsattenteComponent } from './listesreparationsattente/listesreparationsattente.component';
import { ListeVoitureAreparerComponent } from './liste-voiture-areparer/liste-voiture-areparer.component';
import { VehiculereparationpayerComponent } from './vehiculereparationpayer/vehiculereparationpayer.component';
import { PdfDetailsComponent } from './pdf-details/pdf-details.component';
import { EnvoyeMailComponent } from './envoye-mail/envoye-mail.component';
import { DepotvoitureComponent } from './depotvoiture/depotvoiture.component';
import { AvancemenreparationsComponent } from './avancemenreparations/avancemenreparations.component';

const routes: Routes = [
  {path: 'login', component: RegisterUserComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'Garage', component: TemplateComponent},
  {path: 'listesVehicules', component: ListesvehiculesComponent},
  {path: 'listesVehiculesDeposer', component: ListesVehiculeDeposerComponent},
  {path: 'acceuilfinancier', component: AcceuilfinancierComponent},
  {path: 'acceuilatelier', component: AcceuilatelierComponent},
  {path: 'listeReparationParVehicule/:id', component: ListesreparationsparvehiculeComponent},
  {path: 'ReparationsPayer/:id', component: ListesreparationsattenteComponent},
  {path: 'listeVoitureAreparer/:vehicule', component: ListeVoitureAreparerComponent},
  {path: 'VehiculeReparationPayer', component: VehiculereparationpayerComponent},
  {path: 'pdfDetails/:id', component: PdfDetailsComponent},
  {path: 'envoyeMail',component:EnvoyeMailComponent},
  {path: 'DepotVoiture',component:DepotvoitureComponent},
  {path: 'Avancementreparation/:vehicule',component:AvancemenreparationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
