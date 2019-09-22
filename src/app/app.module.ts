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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CancionComponent,
    CancionListComponent,
    CancionFormComponent
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
