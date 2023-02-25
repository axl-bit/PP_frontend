import { TipoCont } from "./tipoContribuyente";
import { TipoDoc } from "./TipoDoc";

export class Entidad{
  id_entidad!:string;
  id_tipo_documento!:TipoDoc;
  nro_documento!:string;
  razon_social!:string;
  nombre_comercial!:string;
  id_tipo_contribuyente!:TipoCont
  direccion!:string;
  telefono_entidad!:string;
  estado_entidad!:boolean;

  constructor(){
    this.id_tipo_documento = new TipoDoc();
    this.id_tipo_contribuyente = new TipoCont();
  }
}
