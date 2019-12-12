import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { ListasComponent } from './listas/listas.component';
import { VerListaComponent } from './ver-lista/ver-lista.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CompraComponent } from './compra.component';
import { MatMenuModule } from '@angular/material/menu';
import { AdicionarProdutoDialogComponent } from './adicionar-produto-dialog/adicionar-produto-dialog.component';
import { CriarProdutoDialogComponent } from './criar-produto-dialog/criar-produto-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AdicionarUsuarioListaDialogComponent } from './adicionar-usuario-lista-dialog/adicionar-usuario-lista-dialog.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { AdicionarProdutoConfirmDialogComponent } from './adicionar-produto-confirm-dialog/adicionar-produto-confirm-dialog.component';

@NgModule({
  declarations: [
    ListasComponent, 
    VerListaComponent, 
    CompraComponent, 
    AdicionarProdutoDialogComponent, 
    CriarProdutoDialogComponent, 
    ConfirmDialogComponent, 
    AdicionarUsuarioListaDialogComponent, BuscarUsuarioComponent, AdicionarProdutoConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatChipsModule,
    MatCheckboxModule
  ]
})
export class CompraModule { }
