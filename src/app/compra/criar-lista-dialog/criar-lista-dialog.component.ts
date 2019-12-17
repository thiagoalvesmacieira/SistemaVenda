import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from 'src/app/services/indexed-db.service';
import { Lista } from 'src/app/model/lista.model';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-criar-lista-dialog',
  templateUrl: './criar-lista-dialog.component.html',
  styleUrls: ['./criar-lista-dialog.component.scss']
})
export class CriarListaDialogComponent implements OnInit {

  nomeLista:string = "";

  constructor(
    public indexedDbService:IndexedDbService
  ) { }

  ngOnInit() {

  }

  salvarLista(){
    let anHourAgoInMilliseconds = Date.now() - 60 * 60 * 1000;
    let lista:any = {
      id:0,  
      id_user:1,
      lista_nome:this.nomeLista,
      timestamp:anHourAgoInMilliseconds
    }

    this.indexedDbService.salvarDados(lista, "LISTAS");

  }
}
