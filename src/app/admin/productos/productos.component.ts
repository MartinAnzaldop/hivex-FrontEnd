import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [
    { 
      nombre: 'iPhone 15',
      categoria: 'Tecnología',
      detalle1: 'Pantalla OLED de 6.7 pulgadas',
      detalle2: 'Chip A16 Bionic',
      precio: 1299.99, 
      stock: 100,
      vendedor: 'Apple',
      imagen: 'assets/img/Iphone15.png' // Ruta de la imagen para el iPhone 15
    },
    { 
      nombre: 'Camisa de Vestir',
      categoria: 'Ropa',
      detalle1: 'Color: Negra',
      detalle2: 'Tallas disponibles: S, M, L, XL',
      precio: 39.99, 
      stock: 50,
      vendedor: 'Fashion Inc.',
      imagen: 'assets/img/camisa.png' // Ruta de la imagen para la camisa de vestir
    },
    { 
      nombre: 'Reloj de mano',
      categoria: 'Accesorios',
      detalle1: 'Color: Plateado/Bronce',
    
      precio: 79.99, 
      stock: 50,
      vendedor: 'Fashion Inc.',
      imagen: 'assets/img/watch.png' // Ruta de la imagen para la camisa de vestir
    },
    // Agrega más productos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

  aprobarProducto(producto: any) {
    // Lógica para aprobar el producto
    console.log('Producto aprobado:', producto);
  }

  rechazarProducto(producto: any) {
    // Lógica para rechazar el producto
    console.log('Producto rechazado:', producto);
  }
}
