import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/Models/entidad';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoCont } from 'src/app/Models/tipoContribuyente';
import { TipoDoc } from 'src/app/Models/TipoDoc';
import { EntidadService } from 'src/app/Service/Entidad/entidad.service';
import { TipoContService } from 'src/app/Service/tipocontribuyente/tipo-cont.service';
import { TipodocumentoService } from 'src/app/Service/tipodocumento/tipodocumento.service';

@Component({
  selector: 'app-add-entidad',
  templateUrl: './add-entidad.component.html',
  styleUrls: ['./add-entidad.component.css']
})
export class AddEntidadComponent implements OnInit {

  entidadnueva: Entidad = new Entidad();
  tipodoc: TipoDoc[] | undefined;
  tipocont: TipoCont[] | undefined;

  respuesta!: RespuestaCommon;
  mensaje!: string;

  constructor(
    private entidadservice: EntidadService,
    private tipodocservice: TipodocumentoService,
    private tipocontservice: TipoContService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje="";
    this.obtenertipodoc()
    this.obtenertipocont()
  }

  obtenertipodoc(){
    this.tipodocservice.getTipoDocumento().subscribe(data =>{
      console.log(data);
      this.tipodoc = data;
    })
  }

  obtenertipocont(){
    this.tipocontservice.getTipoContribuyente().subscribe(data=>{
      console.log(data);
      this.tipocont = data;
    })
  }

  regresar(){
    console.log("Navegando de regreso")
    this.router.navigate(['/Entidad'])
  }

  crearEntidad(){
    console.log("Invocando servicio para añadir una entidad")
    this.entidadservice.saveEntidad(this.entidadnueva).subscribe(data=>{
      this.respuesta = data;
      this.mensaje = this.respuesta.mensaje;
    }, error =>{
      console.log(error);
      this.mensaje = "Hubo un error creando la entidad"
    })
  }

}
