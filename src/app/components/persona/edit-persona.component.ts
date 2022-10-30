import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/s-persona';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  persona: persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.getPersona().subscribe(
      data=>{
        this.persona = data;
      }, err=>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }
}
