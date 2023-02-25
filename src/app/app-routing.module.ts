import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEntidadComponent } from './Components/Entidad/add-entidad/add-entidad.component';
import { EditEntidadComponent } from './Components/Entidad/edit-entidad/edit-entidad.component';
import { ListEntidadComponent } from './Components/Entidad/list-entidad/list-entidad.component';
import { LoginComponent } from './Components/login/login.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AddTipoContComponent } from './Components/Tipocontribuyente/add-tipo-cont/add-tipo-cont.component';
import { EditTipoContComponent } from './Components/Tipocontribuyente/edit-tipo-cont/edit-tipo-cont.component';
import { ListTipoContComponent } from './Components/Tipocontribuyente/list-tipo-cont/list-tipo-cont.component';
import { AddTipodocComponent } from './Components/Tipodocumento/add-tipodoc/add-tipodoc.component';
import { EditTipodocComponent } from './Components/Tipodocumento/edit-tipodoc/edit-tipodoc.component';
import { ListTipodocComponent } from './Components/Tipodocumento/list-tipodoc/list-tipodoc.component';
import { AdminGuard } from './Guards/admin/admin.guard';

const routes: Routes = [
  //home-login
  {path: 'Inicio', component:LoginComponent},
  {path: '', redirectTo: 'Inicio', pathMatch:'full'},

  //signup
  {path: 'Signup', component:SignupComponent},

  //perfil
  {path: 'Perfil', component:PerfilComponent, canActivate:[AdminGuard]},

  //tipodocumento CRUD
  {path: 'TipoDoc', component:ListTipodocComponent, canActivate:[AdminGuard]},
  {path: 'TipoDoc/crear', component:AddTipodocComponent, canActivate:[AdminGuard]},
  {path: 'TipoDoc/actualizar/:id', component: EditTipodocComponent, canActivate:[AdminGuard]},

  //tipocontribuyente CRUD
  {path: 'TipoCont', component:ListTipoContComponent, canActivate:[AdminGuard]},
  {path: 'TipoCont/crear', component:AddTipoContComponent, canActivate:[AdminGuard]},
  {path: 'TipoCont/actualizar/:id', component:EditTipoContComponent, canActivate:[AdminGuard]},

  //entidad CRUD
  {path: 'Entidad', component:ListEntidadComponent, canActivate:[AdminGuard]},
  {path: 'Entidad/crear', component:AddEntidadComponent, canActivate:[AdminGuard]},
  {path: 'Entidad/actualizar/:id', component:EditEntidadComponent, canActivate:[AdminGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
