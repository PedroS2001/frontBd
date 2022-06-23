import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  cliente: any = {
    nombre: "Juan",
    apellido: "Perez",
    dni: 12345678,
    ubicacion: {
        "type": "Point",
        "coordinates":[123,132]
    },
    tipo_de_plan: {
        tipo: "Normal",
        cant_canales: 55,
        canales:[4,5,6,7,8,9,11],
        precio: 1250.55 
    },
    localidad:{
        nombre: "Avellaneda",
        descripcion: "lorem impsu",
        codigo_postal: 5412,
        posicion: {
            "type": "Polygon",
            "coordinates": [
                [123,124],
                [123,122],
                [122,125]
            ]
        },
    }
  };

  ngOnInit(): void {
  }




}
