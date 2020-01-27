import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuscarProdutoLoteDialogComponent } from '../buscar-produto-lote-dialog/buscar-produto-lote-dialog.component';
import { CompraVirtualDialogComponent } from '../compra-virtual-dialog/compra-virtual-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { ProdutoBusca } from 'src/app/model/produto.model';

@Component({
  selector: 'app-buscar-produto-dialog',
  templateUrl: './buscar-produto-dialog.component.html',
  styleUrls: ['./buscar-produto-dialog.component.scss']
})
export class BuscarProdutoDialogComponent implements OnInit {

  screenHeight:any = 0;
  screenWidth:any = 0;
  arrProduto:ProdutoBusca[] = [];
  termo_busca:string = "";
  buscandoProdutos:boolean = false;
  buscaRealizada:boolean = false;
  constructor(
    public dialog: MatDialog,
    public apiService:ApiService,
    public dialogRef: MatDialogRef<BuscarProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.buscaListaProduto();
  }
  buscaListaProduto(){
    this.buscandoProdutos = true;
    this.arrProduto = [];
    this.apiService.getListaProdutos(this.termo_busca).subscribe(d=>{
      this.arrProduto = d;
      this.buscandoProdutos = false;
      this.buscaRealizada = true;
    }, error=>{
      this.buscandoProdutos = false;
    });
  }
  buscarProdutoLoteDialog(produto:ProdutoBusca): void {
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(BuscarProdutoLoteDialogComponent, {
        width: '550px',
        data:produto
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result != null && result != false && result != undefined){
          this.dialogRef.close(result);
        }else{
          console.log("Nenhum produto selecionado!");
        }
      });
    }else{
      const dialogRef = this.dialog.open(BuscarProdutoLoteDialogComponent, {
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        maxWidth: '100vh',
        data:produto
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result != null && result != false && result != undefined){
          this.dialogRef.close(result);
        }else{
          console.log("Nenhum produto selecionado!");
        }
      });
    }
  }
  abrirCompraVirtualDialog(){
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(CompraVirtualDialogComponent, {
        width: '550px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }else{
      const dialogRef = this.dialog.open(CompraVirtualDialogComponent, {
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        maxWidth: '100vh',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }
  }

}
