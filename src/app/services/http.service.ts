import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  urlClientes:string = "https://backendticketera.herokuapp.com/clientes/";
  urlEmpleados:string = "https://backendticketera.herokuapp.com/empleados/";
  urlTickets:string = "https://backendticketera.herokuapp.com/tickets/";

  consultaClientes(endpoint:string)  
  {
    return this.http.get(this.urlClientes+endpoint);
  }

  consultaEmpleados(endpoint:string)
  {
    return this.http.get(this.urlEmpleados+endpoint);
  }

  consultaTickets(endpoint:string)
  {
    return this.http.get(this.urlTickets+endpoint);
  }

}
