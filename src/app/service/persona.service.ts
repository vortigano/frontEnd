import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //https://backendcam.herokuapp.com/
  //baseURL = 'http://localhost:8080/personas/';
  //baseURL = 'https://backendcam.herokuapp.com/personas/';
  baseURL = environment.urlBase + 'personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    //return this.http.get<persona>(this.baseURL + 'traer/perfil');
    return this.http.get<persona>(this.baseURL + 'traer/perfil');
  }
}
