import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/productos';

  private productos$: Subject<Producto[]> = new Subject<Producto[]>();

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  eliminarProducto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  guardarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  obtenerProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  editarProducto(id: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/${id}`, producto);
  }

  actualizarProductos() {
    this.getProductos().subscribe(productos => {
      this.productos$.next(productos);
    });
  }

  getProductosObservable(): Observable<Producto[]> {
    return this.productos$.asObservable();
  }
}