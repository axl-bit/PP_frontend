import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlServicioRest = "http://localhost:8090/rest/usuarios"

  constructor(
    private httpClient: HttpClient
  ) { }

  public añadirUsuario(user:any){
    return this.httpClient.post(this.urlServicioRest + '/agregar', user);
  }
}
