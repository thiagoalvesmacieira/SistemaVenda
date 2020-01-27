import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { BuscarClienteDialogComponent } from '../buscar-cliente-dialog/buscar-cliente-dialog.component';
import { BuscarProdutoDialogComponent } from '../buscar-produto-dialog/buscar-produto-dialog.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IndexedDbService } from 'src/app/services/indexed-db.service';
import { Venda } from 'src/app/model/venda.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ConfirmDialog } from 'src/app/model/util.model';
import { Location, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoLote } from 'src/app/model/produto.model';

@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.scss']
})
export class NovaVendaComponent implements OnInit {
  
  dialogAberta:boolean = false;
  arrProdutos:ProdutoLote[] = [];
  screenHeight:any = 0;
  screenWidth:any = 0;

  venda:Venda = {
    emissao:null,
    cliente:null,
    emitirNotaFiscal:false,
    produtos:null
  }

  constructor(
    private router: Router,
    private locationStrategy: LocationStrategy,
    private _location: Location,
    public indexedDBService:IndexedDbService,
    public authenticationService: AuthenticationService,
    public dialog: MatDialog,
    public themeService:ThemeService
    ) {
  }
  ngOnInit() {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    this.buscarClientDialog();

    let t = new Date();
    let dd = String(t.getDate()).padStart(2, '0');
    let mm = String(t.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = t.getFullYear();
    
    let today:any = dd + '/' + mm + '/' + yyyy; 
    this.venda.emissao = today;
    
    //this.preventBackButton();

  }
/*   preventBackButton() {
    //history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
      if(this.dialogAberta){
        history.pushState(null, null, location.href);
        console.log("Dialog Aberta : " + this.dialogAberta);
      }
    })
  } */
  ngAfterViewInit(){
    console.log("VISUALIZAÇÃO CARREGADA");
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }
  buscarClientDialog():void {
    
    this.venda.emitirNotaFiscal = false;
    this.dialogAberta = true;
    history.pushState(null, null, location.href);

    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(BuscarClienteDialogComponent, {
        width: '600px',
        closeOnNavigation:true,
        disableClose:true
      });
      dialogRef.afterClosed().subscribe(result => {
        
        this.dialogAberta = false;

        if(result != null && result != undefined && result != false){
          this.venda.cliente = result;
          this.emitirNotaFiscalDialogComfirm();
        }
      });
    }else{
      const dialogRef = this.dialog.open(BuscarClienteDialogComponent, {
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        maxWidth: '100vh',
        closeOnNavigation:true,
        disableClose:true
      });
      dialogRef.afterClosed().subscribe(result => {

        this.dialogAberta = false;

        if(result != null && result != undefined && result != false){
          this.venda.cliente = result;
          this.emitirNotaFiscalDialogComfirm();
        }
      });
    }
  }
  removerCliente():void{
    this.venda.cliente = null;
    this.buscarClientDialog();
  }
  buscarProdutoDialog():void {
    history.pushState(null, null, location.href);
    this.dialogAberta = true;
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(BuscarProdutoDialogComponent, {
        width: '600px',
        closeOnNavigation:true,
        disableClose:true
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result != null && result != false && result != undefined){
          this.arrProdutos.push(result);
        }else{
          console.log("Nenhum produto selecionado!");
        }
        this.dialogAberta = false;
      });
    }else{
      const dialogRef = this.dialog.open(BuscarProdutoDialogComponent, {
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        maxWidth: '100vh',
        closeOnNavigation:true,
        disableClose:true
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result != null && result != false && result != undefined){
          this.arrProdutos.push(result);
        }else{
          console.log("Nenhum produto selecionado!");
        }
        this.dialogAberta = false;
      });
    }
  }
  removerProduto():void{
    




  }
  emitirNotaFiscalDialogComfirm():void{

    history.pushState(null, null, location.href);
    this.dialogAberta = true;
    let confirmDialog:ConfirmDialog = {
      titulo:"Emitir nota Fiscal",
      texto:"Você deseja emitir nota fiscal para este cliente ?"
    }
    if(this.screenWidth > 800){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data:confirmDialog,
        disableClose:true,
        closeOnNavigation:true
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dialogAberta = false;
        if(result == true){
          this.venda.emitirNotaFiscal = true;
        }else{
          this.venda.emitirNotaFiscal = false;
        }
      });
    }else{
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '96vw',
        maxWidth: '96vw',
        data:confirmDialog,
        disableClose:true,
        closeOnNavigation:true
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dialogAberta = false;
        if(result == true){
          this.venda.emitirNotaFiscal = true;
        }else{
          this.venda.emitirNotaFiscal = false;
        }
      });
    }
  }
  backClicked():void{
    this._location.back();
  }
  
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {

    console.log('Back button pressed : ' + event);

    if(this.dialogAberta){
      console.log('Back button pressed : dialogAberta');
      this.dialogAberta = false;
      this.router.navigate(['/']);
    }else{
      console.log('Back button pressed : dialogFechada');
    }
/* 
    console.log('Back button pressed : ' + event);
    if(this.dialogAberta){
      history.pushState(null, null, location.href);
      this.dialogAberta = false;
      console.log("Dialog Aberta : " + this.dialogAberta);
    }else{

    } */
  }

}
