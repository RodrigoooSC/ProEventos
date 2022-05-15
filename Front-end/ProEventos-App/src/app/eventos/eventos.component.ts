import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../models/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
  // providers: [EventoService] Injetar uma classe de serviço no angular
})
export class EventosComponent implements OnInit {

  modalRef?: BsModalRef;
// Possui elementos vazios - array
public eventos: Evento[] = [];
public eventosFiltrados: Evento[] = [];

 // ---- PROPERTY BINDING --- //
 // Definir tamanho de imagem
 public widthImg = 150;
 // Definir margem da imagem
 public marginImg = 2;
 // Mostrar imagem
 public displayImg = true;

 private FiltroListado = '';

 public get filtroLista(){
   return this.FiltroListado
 }

 public set filtroLista(value: string){
  this.FiltroListado = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
}

public filtrarEventos(filtrarPor: string) : Evento[] {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -  1 ||
  evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -  1
  );
}

  constructor(
    private eventoService : EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService
    ) { }

  public ngOnInit(): void {
    this.getEventos();

  }

  public exibirImagem(): void {
    this.displayImg = !this.displayImg;
  }

  public getEventos(): void{
    this.eventoService.getEventos().subscribe({
    next: (eventosResp: Evento[] ) => {
      this.eventos = eventosResp;
      this.eventosFiltrados = this.eventos
    },
    error: (error: any) => console.log(error)
  });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('O evento foi deletado com sucesso!', 'Deletado');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
