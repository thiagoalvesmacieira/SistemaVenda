import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ProdutoLote, ProdutoBusca, ProdutoCarrinho } from 'src/app/model/produto.model';
import { ApiService } from 'src/app/services/api.service';
import { BuscarProdutoLoteDialogComfirmDataComponent } from '../buscar-produto-lote-dialog-comfirm-data/buscar-produto-lote-dialog-comfirm-data.component';

@Component({
  selector: 'app-buscar-produto-lote-dialog',
  templateUrl: './buscar-produto-lote-dialog.component.html',
  styleUrls: ['./buscar-produto-lote-dialog.component.scss']
})
export class BuscarProdutoLoteDialogComponent implements OnInit {

  arrProduto:ProdutoLote[] = [];
  buscandoProdutos:boolean = false;
  dialogAberta:boolean = false;
  screenHeight:any = 0;
  screenWidth:any = 0;

  constructor(
    public dialog: MatDialog,
    public apiService:ApiService,
    public dialogRef: MatDialogRef<BuscarProdutoLoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ProdutoBusca
  ) {

  }

  ngOnInit() {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.buscandoProdutos = true;

    this.apiService.getProdutosLote(this.data.idProduto).subscribe(d=>{

      this.arrProduto = d;
      this.buscandoProdutos = false;
      
    }, error=>{
      this.buscandoProdutos = false;
    });

  }

  comfirmProdutoDialog(produtoLote:ProdutoLote):void {

    let produto:ProdutoCarrinho = {
      produtoBusca:this.data,
      produtoLote:produtoLote
    }

    history.pushState(null, null, location.href);
    this.dialogAberta = true;

    if(this.screenWidth > 800){

      const dialogRef = this.dialog.open(BuscarProdutoLoteDialogComfirmDataComponent, {
        width: '500px',
        closeOnNavigation:true,
        disableClose:true,
        data:produto
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result != null && result != false && result != undefined){
          this.dialogRef.close(result);
          //this.arrProdutos.push(result);
        }else{
          console.log("Nenhum produto selecionado!");
        }
        this.dialogAberta = false;
      });

    }else{

      const dialogRef = this.dialog.open(BuscarProdutoLoteDialogComfirmDataComponent, {
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        maxWidth: '100vh',
        closeOnNavigation:true,
        disableClose:true,
        data:produto
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result != null && result != false && result != undefined){
          //this.arrProdutos.push(result);
          this.dialogRef.close(result);
        }else{
          console.log("Nenhum produto selecionado!");
        }
        this.dialogAberta = false;
      });

    }
  }

}
