import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productos = [
    { nombre: 'Producto 1', detalles: 'Detalles del producto 1', stock: 10, precio: 100, imagen: 'URL_imagen_1' },
    { nombre: 'Producto 2', detalles: 'Detalles del producto 2', stock: 5, precio: 50, imagen: 'URL_imagen_2' },
    { nombre: 'Producto 3', detalles: 'Detalles del producto 3', stock: 8, precio: 80, imagen: 'URL_imagen_3' },
    { nombre: 'Producto 4', detalles: 'Detalles del producto 4', stock: 15, precio: 120, imagen: 'URL_imagen_4' },
    { nombre: 'Producto 2', detalles: 'Detalles del producto 2', stock: 5, precio: 50, imagen: 'URL_imagen_2' },
    { nombre: 'Producto 3', detalles: 'Detalles del producto 3', stock: 8, precio: 80, imagen: 'URL_imagen_3' },
    { nombre: 'Producto 2', detalles: 'Detalles del producto 2', stock: 5, precio: 50, imagen: 'URL_imagen_2' },
    { nombre: 'Producto 3', detalles: 'Detalles del producto 3', stock: 8, precio: 80, imagen: 'URL_imagen_3' },
    { nombre: 'Producto 2', detalles: 'Detalles del producto 2', stock: 5, precio: 50, imagen: 'URL_imagen_2' },
    { nombre: 'Producto 3', detalles: 'Detalles del producto 3', stock: 8, precio: 80, imagen: 'URL_imagen_3' },
    // Puedes agregar más productos aquí
  ];

  constructor(private router: Router) {}

  agregarProducto() {
    this.router.navigate(['/agregar-producto']);
  }

  eliminarProducto(producto: any) {
    // Mostrar la alerta para confirmar la eliminación
    const confirmar = confirm(`¿Estás seguro de que quieres eliminar el producto "${producto.nombre}"?`);
    
    if (confirmar) {
      // Eliminar el producto de la lista
      const index = this.productos.indexOf(producto);
      if (index > -1) {
        this.productos.splice(index, 1);
      }
    }
  }
}
