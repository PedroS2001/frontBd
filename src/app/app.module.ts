import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './consultas/clientes/clientes.component';

import { HttpClientModule } from '@angular/common/http';
import { EmpleadosComponent } from './consultas/empleados/empleados.component';
import { TicketsComponent } from './consultas/tickets/tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EmpleadosComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
