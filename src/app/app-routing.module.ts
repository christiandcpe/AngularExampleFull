import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { MaterialComponent } from './components/material/material.component';


const routes: Routes = [
 
  {path : 'usuarios', component: UsuarioComponent},
  {path: 'deposito', component: DepositoComponent},
  {
    path: 'usuarios/:id',
    component: UsuarioComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
