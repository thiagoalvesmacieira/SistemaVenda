import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarProdutoLoteDialogComponent } from '../buscar-produto-lote-dialog/buscar-produto-lote-dialog.component';
import { CompraVirtualDialogComponent } from '../compra-virtual-dialog/compra-virtual-dialog.component';

@Component({
  selector: 'app-buscar-produto-dialog',
  templateUrl: './buscar-produto-dialog.component.html',
  styleUrls: ['./buscar-produto-dialog.component.scss']
})
export class BuscarProdutoDialogComponent implements OnInit {

  screenHeight:any = 0;
  screenWidth:any = 0;

  value = '';
  arrProduto:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }


  buscarProdutoLoteDialog(): void {
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(BuscarProdutoLoteDialogComponent, {
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }else{
      const dialogRef = this.dialog.open(BuscarProdutoLoteDialogComponent, {
        width: '96vw',
        maxWidth: '96vw',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }
  }


  abrirCompraVirtualDialog(){
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(CompraVirtualDialogComponent, {
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }else{
      const dialogRef = this.dialog.open(CompraVirtualDialogComponent, {
        width: '96vw',
        maxWidth: '96vw',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }
  }

}
