import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/usuario/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mensaje!:string;

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.mensaje="";
  }

  formSubmit(){
    this.userService.añadirUsuario(this.user).subscribe(data=>{
      console.log(data);
      this.mensaje = "se Añadio correctamente el usuario"
    }, (error) =>{
      console.log(error);
    })
  }

}
