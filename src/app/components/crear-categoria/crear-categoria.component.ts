import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrl: './crear-categoria.component.css'
})

export class CrearCategoriaComponent {
  categoriaForm: FormGroup;
  titulo = "Crear categoría";

  constructor(private fb: FormBuilder) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      area: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarCategoria() {
    const CATEGORIA: Categoria = {
      nombre: this.categoriaForm.get('nombre')?.value,
      area: this.categoriaForm.get('area')?.value,
      descripcion: this.categoriaForm.get('descripcion')?.value
    };
    console.log(CATEGORIA);
  }

}
