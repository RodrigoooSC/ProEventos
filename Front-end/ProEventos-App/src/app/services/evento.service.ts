import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root'} Injetar uma classe de serviço no angular
  )

export class EventoService {
  baseUrl = 'https://localhost:5001/api/eventos';

constructor(private http: HttpClient) { }

getEventos(){
  return this.http.get(this.baseUrl);
}

}
