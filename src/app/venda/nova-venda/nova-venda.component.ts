import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { BuscarClienteDialogComponent } from '../buscar-cliente-dialog/buscar-cliente-dialog.component';

@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.scss']
})
export class NovaVendaComponent implements OnInit {

  arrProdutos:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  screenHeight:any = 0;
  screenWidth:any = 0;

  constructor(
    public dialog: MatDialog,
    public themeService:ThemeService) {

  }

  ngOnInit() {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }


  buscarClientDialog(): void {
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(BuscarClienteDialogComponent, {
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }else{
      const dialogRef = this.dialog.open(BuscarClienteDialogComponent, {
        width: '96vw',
        maxWidth: '96vw',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }


  }






}
