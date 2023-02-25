import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/Models/entidad';
import { EntidadService } from 'src/app/Service/Entidad/entidad.service';

@Component({
  selector: 'app-list-entidad',
  templateUrl: './list-entidad.component.html',
  styleUrls: ['./list-entidad.component.css']
})
export class ListEntidadComponent implements OnInit {

  entidades: Entidad[] | undefined;

  constructor(
    private entidadservice: EntidadService,
    private reouter: Router
  ) { }

  ngOnInit(): void {
    this.listarEntidad()
  }

  listarEntidad(){
    this.entidadservice.getEntidad().subscribe(data =>{
      console.log(data);
      this.entidades = data;
      console.table(this.entidades);
    })
  }

  borrarEntidad(id: string){
    console.log("Invocando el servicio de delete");
    this.entidadservice.deleteEntidad(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
      this.reouter.navigate(['/Entidad'])
    }, error =>{
      console.log(error);
    })
  }

}
