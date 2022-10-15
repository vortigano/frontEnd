export class persona{
  id?:          number;
  nombre:       string;
  apellido:     string;
  subtitulo:    string;
  acerca_de_mi: string;
  img_perfil:   string;
  img_banner:   string;

  constructor(nombre: string, apellido: string, subtitulo:  string, acerca_de_mi: string, 
              img_perfil: string, img_banner: string){
    this.nombre       = nombre;
    this.apellido     = apellido;
    this.subtitulo    = subtitulo;
    this.acerca_de_mi = acerca_de_mi;
    this.img_perfil   = img_perfil;
    this.img_banner   = img_banner;
  }
}