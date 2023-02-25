import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCont } from 'src/app/Models/tipoContribuyente';
import { TipoContService } from 'src/app/Service/tipocontribuyente/tipo-cont.service';

@Component({
  selector: 'app-edit-tipo-cont',
  templateUrl: './edit-tipo-cont.component.html',
  styleUrls: ['./edit-tipo-cont.component.css']
})
export class EditTipoContComponent implements OnInit {

  TipoContActual!: TipoCont;
  mensaje!: string;

  constructor(
    private tipocontservice: TipoContService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje="";
    this.obtenerTipoCont(this.route.snapshot.paramMap.get('id'));
  }

  obtenerTipoCont(id: string | null){
    console.log("Invocando sevicio rest-findById")
    this.tipocontservice.getTipoContribuyenteByID(id).subscribe(data =>{
      console.log(data);
      this.TipoContActual = data;
    }, error =>{
      console.log(error);
      this.mensaje = "No se puede acceder al tipo de contribuyente"
    })
  }

  ActualizarTipoCont(){
    console.log("Invocando servicio rest-updateById");
    this.tipocontservice.updateTipoContribuyente(this.TipoContActual.id_tipo_contribuyente, this.TipoContActual).subscribe(data=>{
      console.log(data);
      this.mensaje="Se actualizo correctamente el tipo de contribuyente";
    },
    error =>{
      console.log(error);
      this.mensaje="Hubo un error actualizando el tipo de contribuyente";
    })
  }

  regresar(){
    console.log("de regreso")
    this.router.navigate(['/TipoCont'])
  }

}
