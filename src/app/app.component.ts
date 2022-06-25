import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appbd';

  mostrarCliente: boolean = true;
  mostrarEmpleados: boolean = false;
  mostrarTickets: boolean = false;

  clickTema(numero: number) {
    console.log(numero);

    switch (numero) {
      case 1:
        this.mostrarCliente = true;
        this.mostrarEmpleados = false;
        this.mostrarTickets = false;
        break;

      case 2:
        this.mostrarCliente = false;
        this.mostrarEmpleados = true;
        this.mostrarTickets = false;
        break;

      case 3:
        this.mostrarCliente = false;
        this.mostrarEmpleados = false;
        this.mostrarTickets = true;
        break;
    }


  }

}
