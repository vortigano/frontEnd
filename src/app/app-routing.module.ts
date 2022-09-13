import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hard-and-soft-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-and-soft-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

/**
 * editexp/:id
 * donde :id es un número
 */
const routes: Routes = [
  {path: '',              component: HomeComponent},
  {path: 'login',         component: LoginComponent},
  {path: 'nuevaexp',      component: NewExperienciaComponent},
  {path: 'editexp/:id',   component: EditExperienciaComponent},
  {path: 'nuevaedu',      component: NewEducacionComponent},
  {path: 'editedu/:id',   component: EditEducacionComponent},
  {path: 'nuevaskill',    component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
