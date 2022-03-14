import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  // Possui elementos vazios - array
  public eventos: any = [];
 // ---- PROPERTY BINDING --- //
 // Definir tamanho de imagem
 widthImg: number = 150;
 // Definir margem da imagem
 marginImg: number = 2;
 // Mostrar imagem
 displayImg: boolean = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
    
  }

  exibirImagem() {
    this.displayImg = !this.displayImg;
  }

  public getEventos(): void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(
    response => this.eventos = response,
    error => console.log(error)
    );
  }
}
