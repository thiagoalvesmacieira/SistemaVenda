import { Injectable } from '@angular/core';
import { Lista } from '../model/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  arrLista:Lista[] = [];

  constructor() {
    
  }


}
