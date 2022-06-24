import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  consulta:any;
  cantidad!:number;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  
  Consulta(endpoint: string) {
    this.http.consultaTickets(endpoint).subscribe((datosRetornados: any) => {
      console.log(datosRetornados);

      this.cantidad = 0;
      if(Array.isArray(datosRetornados)){
        datosRetornados.forEach( (element:any) => {
          this.cantidad++;
        });
        console.log(this.cantidad);
      }

      this.consulta = JSON.stringify(datosRetornados,undefined, 2);
    })
  }
  
}
