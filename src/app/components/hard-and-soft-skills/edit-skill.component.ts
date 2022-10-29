import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = new Skill("",0.00,"");
  isValid: boolean = false;

  constructor(private skillS: SkillService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data=>{
        this.skill = data;
      }, err=>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    if(!this.validar())
    {
      return;
    }
    this.skillS.update(id, this.skill).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  validar():boolean{
    //console.log("Actuando validacion...");
    let elemento = document.getElementById('porcentajex') as HTMLInputElement | null;
    if(!elemento)
    {
      this.isValid=false;
      elemento.className = "form-control is-invalid";
      return false;
    }
    if(!elemento.value)
    {
      console.log('input era null????? ');
      this.isValid=false;
      elemento.className = "form-control is-invalid";
      return false;
    }
    const texto = elemento.value;
    const regexp = new RegExp(/^(\d{1,2})(\.(\d{1,2}))?(\s{0,})$$/); 
    const test = regexp.test(texto);
    
    this.isValid=test;
    if(this.isValid)
    {
      elemento.className = "form-control is-valid";
    }else
    {
      elemento.className = "form-control is-invalid";
    }
    return test;
  }
  
}
