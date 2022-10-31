import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(public personaService: PersonaService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    //conecto observer suscribiendo
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public onUpdate(){
    console.log("ejecutando onUpdate..");
    this.personaService.borrarAcercaDeMi(this.persona.id, this.persona).subscribe(
      data =>{
        alert("Se borró la descripción");
        //a futuro creo que sería más performante refrescar el DOM
        //luego de actualizarlo en lugar de recargar toda la página 
        //y volver a traer datos remotos
        window.location.reload();
      }, err=>{
        alert("Error borrar la descripción");
        this.router.navigate(['']);
      }
    )
  }
}
