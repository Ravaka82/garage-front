import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TemplateComponent } from './template/template.component';
import { ListesvehiculesComponent } from './listesvehicules/listesvehicules.component';
import { AcceuilfinancierComponent } from './acceuilfinancier/acceuilfinancier.component';
import { AcceuilatelierComponent } from './acceuilatelier/acceuilatelier.component';

const routes: Routes = [
  {path: 'login', component: RegisterUserComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'Garage', component: TemplateComponent},
  {path: 'listesVehicules', component: ListesvehiculesComponent},
  {path: 'acceuilfinancier', component: AcceuilfinancierComponent},
  {path: 'acceuilatelier', component: AcceuilatelierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
