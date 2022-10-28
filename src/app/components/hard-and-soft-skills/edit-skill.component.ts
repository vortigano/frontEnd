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

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
