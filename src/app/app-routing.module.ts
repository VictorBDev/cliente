import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component'; 
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarCategoriasComponent } from './components/listar-categorias/listar-categorias.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';

const routes: Routes = [
  //Create a new route for the products
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },

  //Create a new route for the categories
  { path: 'categorias', component: ListarCategoriasComponent },
  { path: 'crear-categoria', component: CrearCategoriaComponent },
  { path: 'editar-categoria/:id', component: CrearCategoriaComponent },

  //Create a wildcard route
  { path: '**', redirectTo: 'productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
