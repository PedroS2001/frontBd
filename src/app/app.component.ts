import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appbd';

  mostrarCliente: boolean = true;
  mostrarAtencion: boolean = false;
  mostrarIncidentes: boolean = false;

  clickTema(numero: number) {
    console.log(numero);

    switch (numero) {
      case 1:
        this.mostrarCliente = true;
        this.mostrarAtencion = false;
        this.mostrarIncidentes = false;
        break;

      case 2:
        this.mostrarCliente = false;
        this.mostrarAtencion = true;
        this.mostrarIncidentes = false;
        break;

      case 3:
        this.mostrarCliente = false;
        this.mostrarAtencion = false;
        this.mostrarIncidentes = true;
        break;
    }




  }

}
