import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';


const routes: Routes = [
  { path: '', component: NovaVendaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule { }
