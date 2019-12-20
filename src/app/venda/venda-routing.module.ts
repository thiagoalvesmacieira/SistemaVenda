import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';
import { ListarVendasComponent } from './listar-vendas/listar-vendas.component';


const routes: Routes = [
  { path: '', component: NovaVendaComponent },
  { path: 'lista', component: ListarVendasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule { }
