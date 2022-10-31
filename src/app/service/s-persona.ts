import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //https://backendcam.herokuapp.com/
  //baseURL = 'http://localhost:8080/personas/';
  //baseURL = 'https://backendcam.herokuapp.com/personas/';
  baseURL = environment.urlBase + 'personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.baseURL + 'traer/perfil');
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `editar/${id}`, persona);
  }

  public borrarAcercaDeMi(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `borrarAcercaDeMi/${id}`, persona);
  }
}
