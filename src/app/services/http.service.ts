import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  urlClientes:string = "http://localhost:8080/clientes/";
  urlEmpleados:string = "http://localhost:8080/empleados/";
  urlTickets:string = "http://localhost:8080/tickets/";

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
