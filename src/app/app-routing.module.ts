import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Venda', loadChildren: () => import('./venda/venda.module').then(m => m.VendaModule) },
  { path: 'Login', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
