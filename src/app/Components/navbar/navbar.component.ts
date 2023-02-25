import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;

  isLoggedIn = false;
  user:any = null;

  constructor(
    public login:LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    //obtenemos si estamos logeados
    this.isLoggedIn = this.login.isLoggedIn();

    //obtenemos el usuario
    this.user = this.login.getUser();

    //asignamos los datos
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )

  }

  //esta parte es para cerrar el logeo

  public logout(){
    this.login.logout();
    window.location.reload();
    window.location.replace('/Inicio');
}


  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }


  //esta parte es para la navbar resposive

  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
}
