import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { CriarListaDialogComponent } from '../criar-lista-dialog/criar-lista-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  arrLista:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,];
  screenHeight:any = 0;
  screenWidth:any = 0;

  constructor(
    public themeService:ThemeService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }



  criarListaDialog(): void {
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(CriarListaDialogComponent, {
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed : ' + result);
      });
    }else{
      const dialogRef = this.dialog.open(CriarListaDialogComponent, {
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
