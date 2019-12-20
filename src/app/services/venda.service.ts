import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  arrCliente:Cliente[] = [];

  constructor() { }
}
