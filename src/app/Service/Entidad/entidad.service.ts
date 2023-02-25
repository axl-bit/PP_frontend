import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Entidad } from 'src/app/Models/entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private urlServicioRest = "http://localhost:8090/rest/entidad"

  constructor(
    private httpClient: HttpClient,
  ) { }

    getEntidad(): Observable<Entidad[]> {
      return this.httpClient.get<Entidad[]>(this.urlServicioRest + '/listar');
    }

    getEntidadByID(id: string | null):Observable<Entidad>{
      return this.httpClient.get<Entidad>(`${this.urlServicioRest}/buscar/${id}`)
    }

    saveEntidad(data: Entidad | null): Observable<RespuestaCommon>{

      return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data)
    }

    updateEntidad(id: string  | null, data: Entidad | null): Observable<RespuestaCommon>{
      return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data);
    }

    deleteEntidad(id: string | null): Observable<RespuestaCommon>{
      console.log("Invocando metodo de eliminación");
      console.log(`${this.urlServicioRest}/borrar/${id}`)
      return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`);
    }
}
