import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProdutoLote, ProdutoCarrinho } from 'src/app/model/produto.model';
import { UnidadeMedida, UnidMedida, arrUnidadeMedida } from 'src/app/model/util.model';

@Component({
  selector: 'app-buscar-produto-lote-dialog-comfirm-data',
  templateUrl: './buscar-produto-lote-dialog-comfirm-data.component.html',
  styleUrls: ['./buscar-produto-lote-dialog-comfirm-data.component.scss']
})
export class BuscarProdutoLoteDialogComfirmDataComponent implements OnInit {

  arrUnidadesDeMedida:UnidadeMedida[] = [];
  unidadeMedidaSelecionada:string ;


  quantidadeCaixas:number;
  itensPorCaixa:number;
  custoUnitarioItem:number;



  labelQtdItem:string = "QTD. CAIXAS";
  labelValorUnitario:string = "R$ CAIXA";
  labelQtdPorCaixa:string = "Bandejas Por Caixa";
  labelQtdUnitariaTotal:string = "QTD. BANDEJAS";


  constructor(
    public dialogRef: MatDialogRef<BuscarProdutoLoteDialogComfirmDataComponent>,
    @Inject(MAT_DIALOG_DATA) public produto:ProdutoCarrinho
  ) {
    this.unidadeMedidaSelecionada = UnidMedida.Caixa;
    this.arrUnidadesDeMedida = arrUnidadeMedida;
  }

  ngOnInit() {
    console.log("DATA : " + JSON.stringify(this.produto));
  }
  aoAlterarUnidadeMedida(){
    if (this.unidadeMedidaSelecionada == UnidMedida.Caixa){
      this.labelValorUnitario = "R$ CAIXA";
      this.labelQtdPorCaixa = "BANDEJAS POR CAIXA";
    }
    if (this.unidadeMedidaSelecionada == UnidMedida.Bandeja){
      this.labelValorUnitario = "R$ BANDEJAS";
      this.labelQtdPorCaixa = "BANDEJAS POR CAIXA";
      this.labelQtdUnitariaTotal = "QTD. BANDEJAS";
    }
    if (this.unidadeMedidaSelecionada == UnidMedida.Kilo){
      this.labelValorUnitario = "R$ KILOS";
      this.labelQtdPorCaixa = "KILOS POR CAIXA";
      this.labelQtdUnitariaTotal = "KILOS POR CAIXA";
    }
    if (this.unidadeMedidaSelecionada == UnidMedida.Pacote){
      this.labelValorUnitario = "R$ PACOTE";
      this.labelQtdPorCaixa = "QTD.PACOTES";
      this.labelQtdUnitariaTotal = "PACOTES POR CAIXA";
    }
    if (this.unidadeMedidaSelecionada == UnidMedida.Saco){
      this.labelValorUnitario = "R$ SACOS";
      this.labelQtdPorCaixa = "SACOS POR CAIXA";
      this.labelQtdUnitariaTotal = "QTD.SACOS";
    }
    if (this.unidadeMedidaSelecionada == UnidMedida.Unidade){
      this.labelValorUnitario = "R$ UNIDADE";
      this.labelQtdPorCaixa = "UNIDADES POR CAIXA";
      this.labelQtdUnitariaTotal = "QTD.UNIDADES";
    }
    if (this.unidadeMedidaSelecionada == UnidMedida.Bin){
      this.labelValorUnitario = "R$ BIN";
      this.labelQtdPorCaixa = "BIN POR CAIXA";
      this.labelQtdUnitariaTotal = "QTD.BINS";
    }
  }





  salvarProdutoNoCarrinho():void{
    console.log("Produto adicionado ao carrinho!");
    this.dialogRef.close(this.produto);
  }

  salvarProduto():void{
    this.dialogRef.close(this.produto);
    console.log("Salvar Produto");
  }
}
