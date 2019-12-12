import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasComponent } from './listas/listas.component';
import { VerListaComponent } from './ver-lista/ver-lista.component';
import { CompraComponent } from './compra.component';


const routes: Routes = [
  { path: '', component: CompraComponent, children:[
    { path: '', component: ListasComponent },
    { path: 'lista', component: VerListaComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompraRoutingModule { }
