import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

  listProductos: Producto[] = [];
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();}

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      //console log para ver los datos que se obtienen
      console.log('Datos recibidos:', data);
      console.log('Tipo de datos:', typeof data);
      console.log('Es un array:', Array.isArray(data));
      this.listProductos = data;
      //console log para ver los datos que se asignan
      console.log('listProductos después de asignar:', this.listProductos);
    }, error => {
      console.log('Error al obtener productos:', error);
    });}
  
  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.obtenerProductos();
    }, error => {
      console.log(error);
    }
  )}
}