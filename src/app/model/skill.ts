export class Skill {
  id:         number;
  nombre:     string;
  porcentaje: number;
  img_url:    string;

  constructor(nombre: string, porcentaje: number, img_url: string){
    this.nombre     = nombre;
    this.porcentaje = porcentaje;
    this.img_url    = img_url;
  }
}
