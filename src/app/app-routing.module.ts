import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { MaterialComponent } from './components/material/material.component';
import { LoginComponent } from './components/login/login.component'


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
  },
  {path : '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
