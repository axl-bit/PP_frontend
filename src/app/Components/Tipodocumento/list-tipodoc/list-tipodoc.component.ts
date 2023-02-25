import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDoc } from 'src/app/Models/TipoDoc';
import { TipodocumentoService } from 'src/app/Service/tipodocumento/tipodocumento.service';

@Component({
  selector: 'app-list-tipodoc',
  templateUrl: './list-tipodoc.component.html',
  styleUrls: ['./list-tipodoc.component.css']
})
export class ListTipodocComponent implements OnInit {

  tipodoc: TipoDoc[] | undefined;

  constructor(
    private tipodocservice: TipodocumentoService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.listarTipoDoc()

  }

  listarTipoDoc(){
    this.tipodocservice.getTipoDocumento().subscribe(data =>{
      console.log(data);
      this.tipodoc = data;
      console.table(this.tipodoc);
    })
  }

  borrarTipoDoc(id: string){
    console.log("Invocando el servicio de delete");
    this.tipodocservice.deleteTipoDocumento(id).subscribe(data =>{
      console.log(data);
      this.ngOnInit();
      this.router.navigate(['/TipoDoc']);
    }, error =>{
      console.log(error);
    }
    )
  }

}
