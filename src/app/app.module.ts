import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncidentesComponent } from './consultas/incidentes/incidentes.component';
import { ClientesComponent } from './consultas/clientes/clientes.component';
import { AtencionComponent } from './consultas/atencion/atencion.component';

import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './vistas/ticket/ticket.component';
import { ClienteComponent } from './vistas/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidentesComponent,
    ClientesComponent,
    AtencionComponent,
    TicketComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
