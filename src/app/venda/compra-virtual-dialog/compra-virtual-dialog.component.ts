import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarFornecedorDialogComponent } from '../buscar-fornecedor-dialog/buscar-fornecedor-dialog.component';

@Component({
  selector: 'app-compra-virtual-dialog',
  templateUrl: './compra-virtual-dialog.component.html',
  styleUrls: ['./compra-virtual-dialog.component.scss']
})
export class CompraVirtualDialogComponent implements OnInit {

  screenHeight:any = 0;
  screenWidth:any = 0;

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.abrirCompraVirtualDialog();
  }

  abrirCompraVirtualDialog(){
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(BuscarFornecedorDialogComponent, {
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }else{
      const dialogRef = this.dialog.open(BuscarFornecedorDialogComponent, {
        width: '96vw',
        maxWidth: '96vw',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }
  }

}
