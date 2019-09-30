import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancionFormComponent } from './components/cancion-form/cancion-form.component';
import { CancionListComponent } from './components/cancion-list/cancion-list.component';
import { CancionEditComponent } from './components/cancion-edit/cancion-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'editar/:id', component: CancionEditComponent },
  { path: 'inicio', component: DashboardComponent},
  { path: 'agregar', component: CancionFormComponent },
  { path: 'lista', component: CancionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
