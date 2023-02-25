import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoCont } from 'src/app/Models/tipoContribuyente';

@Injectable({
  providedIn: 'root'
})
export class TipoContService {

  private urlServicioRest = "http://localhost:8090/rest/tipocont"

  constructor(
    private httpClient: HttpClient,
    ) { }

    getTipoContribuyente(): Observable<TipoCont[]> {
      return this.httpClient.get<TipoCont[]>(this.urlServicioRest + '/listar');
    }

    getTipoContribuyenteByID(id: string | null):Observable<TipoCont>{
      return this.httpClient.get<TipoCont>(`${this.urlServicioRest}/buscar/${id}`)
    }

    saveTipoContribuyente(data: TipoCont | null): Observable<RespuestaCommon>{

      return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data)
    }

    updateTipoContribuyente(id: string  | null, data: TipoCont | null): Observable<RespuestaCommon>{
      return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data);
    }

    deleteTipoContribuyente(id: string | null): Observable<RespuestaCommon>{
      console.log("Invocando metodo de eliminación");
      console.log(`${this.urlServicioRest}/borrar/${id}`)
      return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`);
    }
}
