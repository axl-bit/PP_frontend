import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoCont } from 'src/app/Models/tipoContribuyente';
import { TipoContService } from 'src/app/Service/tipocontribuyente/tipo-cont.service';

@Component({
  selector: 'app-add-tipo-cont',
  templateUrl: './add-tipo-cont.component.html',
  styleUrls: ['./add-tipo-cont.component.css']
})
export class AddTipoContComponent implements OnInit {

  tipocontNuevo: TipoCont = new TipoCont();
  respuesta!: RespuestaCommon;
  mensaje!: string;

  constructor(
    private tipocontservice: TipoContService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mensaje="";
  }

  regresar(){
    console.log("Navegando de regresao al componente listado");
      this.router.navigate(['/TipoCont'])
  }

  crearTipoCont(){
    console.log("Invocando servicio para añadir un tipo de contribuyente")
    this.tipocontservice.saveTipoContribuyente(this.tipocontNuevo).subscribe(data=>{
      console.log("Esta llegando la data");
      this.respuesta = data;
      this.mensaje = this.respuesta.mensaje;
    }, error =>{
      console.log(error);
      this.mensaje = "Hubo un error creando el tipo de documento"
    })
  }

}
