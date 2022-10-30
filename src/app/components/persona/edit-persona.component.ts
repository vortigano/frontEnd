import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  opt    : string  = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.opt = this.activatedRouter.snapshot.params['opt'];
    console.log("opcion: " + this.opt);
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
