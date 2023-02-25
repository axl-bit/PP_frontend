import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoDoc } from 'src/app/Models/TipoDoc';



@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  private urlServicioRest = "http://localhost:8090/rest/tipodoc"

  constructor(
    private httpClient: HttpClient,
    ) { }

    getTipoDocumento(): Observable<TipoDoc[]> {
      return this.httpClient.get<TipoDoc[]>(this.urlServicioRest + '/listar');
    }

    getTipoDocumentoByID(id: string | null):Observable<TipoDoc>{
      return this.httpClient.get<TipoDoc>(`${this.urlServicioRest}/buscar/${id}`)
    }

    saveTipoDocumento(data: TipoDoc | null): Observable<RespuestaCommon>{

      return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data)
    }

    updateTipoDocumento(id: string  | null, data: TipoDoc | null): Observable<RespuestaCommon>{
      return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data);
    }

    deleteTipoDocumento(id: string | null): Observable<RespuestaCommon>{
      console.log("Invocando metodo de eliminación");
      console.log(`${this.urlServicioRest}/borrar/${id}`)
      return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`);
    }
}
