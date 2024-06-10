export class Categoria {
  _id?: number;
  nombre: string;
  area: string;
  descripcion: string;

  constructor(nombre: string, area: string, descripcion: string) {
    this.nombre = nombre;
    this.area = area;
    this.descripcion = descripcion;
  }
}