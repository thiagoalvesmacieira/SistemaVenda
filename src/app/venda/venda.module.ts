import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaRoutingModule } from './venda-routing.module';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';
import { BuscarClienteDialogComponent } from './buscar-cliente-dialog/buscar-cliente-dialog.component';
import { BuscarProdutoDialogComponent } from './buscar-produto-dialog/buscar-produto-dialog.component';
import { CompraVirtualDialogComponent } from './compra-virtual-dialog/compra-virtual-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BuscarProdutoLoteDialogComponent } from './buscar-produto-lote-dialog/buscar-produto-lote-dialog.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BuscarFornecedorDialogComponent } from './buscar-fornecedor-dialog/buscar-fornecedor-dialog.component';

@NgModule({
  declarations: [
    NovaVendaComponent, 
    BuscarClienteDialogComponent, 
    BuscarProdutoDialogComponent, 
    CompraVirtualDialogComponent, 
    ConfirmDialogComponent, 
    BuscarProdutoLoteDialogComponent, BuscarFornecedorDialogComponent
  ],
  imports: [
    CommonModule,
    VendaRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule
  ],
  entryComponents: [
    BuscarClienteDialogComponent,
    BuscarProdutoDialogComponent,
    CompraVirtualDialogComponent,
    BuscarProdutoLoteDialogComponent
  ]
})

export class VendaModule {



  
}
