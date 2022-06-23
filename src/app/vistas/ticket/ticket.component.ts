import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { }

  ticket: any = {
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    motivo: "devolucion",
    responsables: [
      {
        "idEmpleado": 1,
        "nombre": "emplea",
        "apellido": "ado",
        "dni": 12345678,
        area: {
          "nombre": "atencion al cliente",
          posicion: {
            "type": "Point",
            "coordinates": [123, 132]
          }
        }
      },
      {
        "idEmpleado": 1,
        "nombre": "pepe",
        "apellido": "messi",
        "dni": 12345678,
        area: {
          "nombre": "atencion al cliente",
          posicion: {
            "type": "Point",
            coordinates: [123, 132]
          }
        }
      }
    ],
    pasos: ["atencion al cliente", "servicio tecnico"],
    resuelto: false,
    finalizado: false
  }

  ngOnInit(): void {
  }

}
