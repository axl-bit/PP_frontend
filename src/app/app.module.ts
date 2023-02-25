import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { authInterceptorProviders } from './Service/login/auth.interceptor.service';

//signup
import { SignupComponent } from './Components/signup/signup.component';
//login
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { ListTipodocComponent } from './Components/Tipodocumento/list-tipodoc/list-tipodoc.component';
import { AddTipodocComponent } from './Components/Tipodocumento/add-tipodoc/add-tipodoc.component';
import { EditTipodocComponent } from './Components/Tipodocumento/edit-tipodoc/edit-tipodoc.component';
import { AddTipoContComponent } from './Components/Tipocontribuyente/add-tipo-cont/add-tipo-cont.component';
import { EditTipoContComponent } from './Components/Tipocontribuyente/edit-tipo-cont/edit-tipo-cont.component';
import { ListTipoContComponent } from './Components/Tipocontribuyente/list-tipo-cont/list-tipo-cont.component';
import { ListEntidadComponent } from './Components/Entidad/list-entidad/list-entidad.component';
import { AddEntidadComponent } from './Components/Entidad/add-entidad/add-entidad.component';
import { EditEntidadComponent } from './Components/Entidad/edit-entidad/edit-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    PerfilComponent,
    ListTipodocComponent,
    AddTipodocComponent,
    EditTipodocComponent,
    AddTipoContComponent,
    EditTipoContComponent,
    ListTipoContComponent,
    ListEntidadComponent,
    AddEntidadComponent,
    EditEntidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
