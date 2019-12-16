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

  constructor(
    public indexedDbService:IndexedDbService
  ) { }

  ngOnInit() {

  }

  getProdutos(){


    let produto:Produto = {
      id: 5,
      id_user: 1,
      imagem: "https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9---cone-de-cluster-de-uvas-by-vexels.png",
      nome: "PRODUTO ATUALIZADO"
    }
    this.indexedDbService.atualizarDados(produto,"PRODUTOS");
   
   /*  this.indexedDbService.criarProduto(); */

/*     this.indexedDbService.deletarDados(2,"PRODUTOS"); */
  }
}
