import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  constructor(private http: HttpService) { }
  @ViewChild('pepe') pedro!: ElementRef;

  ngOnInit(): void {
    /*this.http.traerDatosGithub().subscribe(datosRetornados => {
      console.log(datosRetornados);
    })*/
  }


  juancito(){
    console.log(this.pedro.nativeElement.style.backgroundColor = "red");
  }
  


}
