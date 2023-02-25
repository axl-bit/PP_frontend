import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoDoc } from 'src/app/Models/TipoDoc';
import { TipodocumentoService } from 'src/app/Service/tipodocumento/tipodocumento.service';

@Component({
  selector: 'app-add-tipodoc',
  templateUrl: './add-tipodoc.component.html',
  styleUrls: ['./add-tipodoc.component.css']
})
export class AddTipodocComponent implements OnInit {

  tipodocNuevo: TipoDoc = new TipoDoc();
  respuesta!: RespuestaCommon;
  mensaje!:string;

  constructor(
    private tipodocservice: TipodocumentoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mensaje="";
  }

  regresar(){
    console.log("Navegando de regreso al compoenente listado");
    this.router.navigate(['/TipoDoc'])
  }

  crearTipoDoc(){
    console.log("Invocando servicio para añadir un tipo de documento")
    this.tipodocservice.saveTipoDocumento(this.tipodocNuevo).subscribe(data =>{
      console.log("Esta llegando la data");
      this.respuesta = data;
      this.mensaje = this.respuesta.mensaje;
    }, error =>{
      console.log(error);
      this.mensaje = "Hubo un error creando el tipo de documento"
    })
  }

}
