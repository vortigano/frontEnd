import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/s-persona';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: persona  = new persona("","","","","","");
  isLogged = false;

  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  /**
   * Borra las credenciales y vuelve a recargar la página
   */
  onLogout(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  logIn(){
    this.router.navigate(['/login'])
    
  }
}
