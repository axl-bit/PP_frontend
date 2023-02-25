import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCont } from 'src/app/Models/tipoContribuyente';
import { TipoContService } from 'src/app/Service/tipocontribuyente/tipo-cont.service';

@Component({
  selector: 'app-list-tipo-cont',
  templateUrl: './list-tipo-cont.component.html',
  styleUrls: ['./list-tipo-cont.component.css']
})
export class ListTipoContComponent implements OnInit {

  tipocont: TipoCont[]| undefined;

  constructor(
    private tipocontservice: TipoContService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listarTipoCont()
  }

  listarTipoCont(){
    this.tipocontservice.getTipoContribuyente().subscribe(data=>{
      console.log(data);
      this.tipocont = data;
      console.table(this.tipocont);
    })
  }

  borrarTipoCont(id: string){
    console.log("Invocando el servicio de delte");
    this.tipocontservice.deleteTipoContribuyente(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
      this.router.navigate(['/TipoCont']);
    }, error =>{
      console.log(error);
    })
  }

}
