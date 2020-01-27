import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaRoutingModule } from './venda-routing.module';

//#############################################################################
//Componentes da aplicação
import { NovaVendaComponent } from './nova-venda/nova-venda.component';
import { BuscarClienteDialogComponent } from './buscar-cliente-dialog/buscar-cliente-dialog.component';
import { BuscarProdutoDialogComponent } from './buscar-produto-dialog/buscar-produto-dialog.component';
import { CompraVirtualDialogComponent } from './compra-virtual-dialog/compra-virtual-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BuscarProdutoLoteDialogComponent } from './buscar-produto-lote-dialog/buscar-produto-lote-dialog.component';
import { ListarVendasComponent } from './listar-vendas/listar-vendas.component';
import { BuscarProdutoLoteDialogComfirmDataComponent } from './buscar-produto-lote-dialog-comfirm-data/buscar-produto-lote-dialog-comfirm-data.component';
//Componentes da aplicação
//################################################################################

//################################################################################
//Material Design Import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BuscarFornecedorDialogComponent } from './buscar-fornecedor-dialog/buscar-fornecedor-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
//Material Design Import
//##################################################################################

//##################################################################################
//Outros módulos necessários
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
};
//Outros módulos necessários
//##################################################################################



@NgModule({
  declarations: [
    NovaVendaComponent, 
    BuscarClienteDialogComponent, 
    BuscarProdutoDialogComponent, 
    CompraVirtualDialogComponent, 
    ConfirmDialogComponent, 
    BuscarProdutoLoteDialogComponent, 
    BuscarFornecedorDialogComponent, 
    ListarVendasComponent, 
    BuscarProdutoLoteDialogComfirmDataComponent
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
    MatRadioModule,
    MatProgressBarModule,
    MatSelectModule,
    CurrencyMaskModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    BuscarClienteDialogComponent,
    BuscarProdutoDialogComponent,
    CompraVirtualDialogComponent,
    BuscarProdutoLoteDialogComponent,
    BuscarFornecedorDialogComponent,
    BuscarProdutoLoteDialogComponent,
    BuscarProdutoLoteDialogComfirmDataComponent
  ],providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
]
})

export class VendaModule {



  
}
