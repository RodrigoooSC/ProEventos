import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
  // providers: [EventoService] Injetar uma classe de serviço no angular
})
export class EventosComponent implements OnInit {

  // Possui elementos vazios - array
  public eventos: any = [];
  public eventosFiltrados: any = [];

 // ---- PROPERTY BINDING --- //
 // Definir tamanho de imagem
 widthImg: number = 150;
 // Definir margem da imagem
 marginImg: number = 2;
 // Mostrar imagem
 displayImg: boolean = true;

 private _filtroLista: string = '';

 public get filtroLista(){
   return this._filtroLista
 }

 public set filtroLista(value: string){
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
}

filtrarEventos(filtrarPor: string) : any {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter((evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -  1 ||
  evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -  1  ||
  evento.dataEvento.toLocaleLowerCase().indexOf(filtrarPor) !== -  1
  );
}

  constructor(private eventoService : EventoService) { }

  ngOnInit() {
    this.getEventos();

  }

  exibirImagem() {
    this.displayImg = !this.displayImg;
  }

  public getEventos(): void{
    this.eventoService.getEventos().subscribe(
    response => {
      this.eventos = response;
      this.eventosFiltrados = this.eventos
    },
    error => console.log(error)
    );
  }
}
