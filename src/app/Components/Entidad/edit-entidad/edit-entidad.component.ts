import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entidad } from 'src/app/Models/entidad';
import { TipoCont } from 'src/app/Models/tipoContribuyente';
import { TipoDoc } from 'src/app/Models/TipoDoc';
import { EntidadService } from 'src/app/Service/Entidad/entidad.service';
import { TipoContService } from 'src/app/Service/tipocontribuyente/tipo-cont.service';
import { TipodocumentoService } from 'src/app/Service/tipodocumento/tipodocumento.service';

@Component({
  selector: 'app-edit-entidad',
  templateUrl: './edit-entidad.component.html',
  styleUrls: ['./edit-entidad.component.css']
})
export class EditEntidadComponent implements OnInit {

  EntidaActual!: Entidad;
  tipodoc: TipoDoc[] | undefined;
  tipocont: TipoCont[] | undefined;

  mensaje!: string;

  constructor(
    private entidadservice: EntidadService,
    private tipodocservice: TipodocumentoService,
    private tipocontservice: TipoContService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje="";
    this.obtenertipodoc()
    this.obtenertipocont()
    this.obtenerEntidad(this.route.snapshot.paramMap.get('id'))
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

  obtenerEntidad(id: string | null){
    console.log("Invocando servicio rest-finById")
    this.entidadservice.getEntidadByID(id).subscribe(data=>{
      console.log(data);
      this.EntidaActual = data;
    }, error =>{
      console.log(error);
      this.mensaje = "No se puede acceder a la entidad"
    })
  }

  ActualizarEntidad(){
    console.log("Invocando servicio rest-updateById");
    this.entidadservice.updateEntidad(this.EntidaActual.id_entidad, this.EntidaActual).subscribe(data=>{
      console.log(data);
      this.mensaje = "se actualizo corectamente la entidad";
    }, error =>{
      this.mensaje="Hubo un error actualizando la entidad";
    })
  }

  regresar(){
    console.log("de regreso")
    this.router.navigate(['/Entidad'])
  }

}
