import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/s-persona';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector:   'app-persona',
  templateUrl:'./persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona: persona  = new persona("","","","","","");
  isLogged= false;
  
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    //conecto observer suscribiendo
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
