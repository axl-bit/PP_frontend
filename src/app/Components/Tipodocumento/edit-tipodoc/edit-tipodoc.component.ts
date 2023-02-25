import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDoc } from 'src/app/Models/TipoDoc';
import { TipodocumentoService } from 'src/app/Service/tipodocumento/tipodocumento.service';

@Component({
  selector: 'app-edit-tipodoc',
  templateUrl: './edit-tipodoc.component.html',
  styleUrls: ['./edit-tipodoc.component.css']
})
export class EditTipodocComponent implements OnInit {

  TipoDocActual !: TipoDoc;
  mensaje !: string;

  constructor(
    private tipodocservice: TipodocumentoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje="";
    this.obtenerTipoDoc(this.route.snapshot.paramMap.get('id'));
  }

  obtenerTipoDoc(id: string | null){
    console.log("Invocando servicio rest-finById")
    this.tipodocservice.getTipoDocumentoByID(id).subscribe(data =>{
      console.log(data);
      this.TipoDocActual = data;
    },
    error =>{
      console.log(error);
      this.mensaje = "No se puede acceder al tipo de documento"
    })
  }

  ActualizarTipoDoc(){
    console.log("Invocando servicio rest-updateById");
    this.tipodocservice.updateTipoDocumento(this.TipoDocActual.id_tipo_documento, this.TipoDocActual).subscribe(data=>{
      console.log(data);
      this.mensaje = "Se actualizo correctamente el tipo de documento";
    },
    error =>{
      console.log(error);
      this.mensaje = "Hubo un error actualizando el tipo de documento";
    })
  }

  regresar(){
    console.log("de regreso")
    this.router.navigate(['/TipoDoc'])
  }

}
