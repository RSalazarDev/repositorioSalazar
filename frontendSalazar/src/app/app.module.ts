import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicosComponent } from './componentes/medicos/medicos.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { MapaComponent } from './componentes/mapa/mapa.component';




@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    MedicosComponent,
    CitasComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}, {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
