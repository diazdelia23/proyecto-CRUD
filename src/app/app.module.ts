import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { CancionListComponent } from './components/cancion-list/cancion-list.component';
import { CancionFormComponent } from './components/cancion-form/cancion-form.component';
import { CancionService } from './services/cancion.service';
import { CancionEditComponent } from './components/cancion-edit/cancion-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CancionEliminarComponent } from './components/cancion-eliminar/cancion-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CancionComponent,
    CancionListComponent,
    CancionFormComponent,
    CancionEditComponent,
    DashboardComponent,
    CancionEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CancionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
