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

@NgModule({
  declarations: [ListasComponent, VerListaComponent, CompraComponent],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class CompraModule { }
