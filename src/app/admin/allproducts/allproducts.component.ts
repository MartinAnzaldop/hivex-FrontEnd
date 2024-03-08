import { Component, OnInit } from '@angular/core';


interface Supplier{
  producto: string,
  empresa: string,
  descripcion:string,
  stock: string

}
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  suppliers: Array<Supplier> = [
    { producto: 'Camisa de algodón', empresa: 'Textiles S.A.', descripcion: 'Camisa de algodón de manga larga', stock: '100' },
    { producto: 'Zapatillas deportivas', empresa: 'Calzados Deportivos S.A.', descripcion: 'Zapatillas para correr, varios colores disponibles', stock: '200' },
    { producto: 'Bolígrafo recargable', empresa: 'Papelería Moderna', descripcion: 'Bolígrafo de tinta negra recargable', stock: '50' },
    { producto: 'Computadora portátil', empresa: 'Tecnología Avanzada Ltda.', descripcion: 'Computadora portátil con procesador de última generación', stock: '30' },
    { producto: 'Cámara fotográfica', empresa: 'Electrónica Digital', descripcion: 'Cámara digital de alta resolución', stock: '40' },
    { producto: 'Mesa de madera', empresa: 'Muebles Elegantes S.A.', descripcion: 'Mesa de comedor de madera maciza', stock: '20' },
    { producto: 'Reloj de pulsera', empresa: 'Joyería Fina', descripcion: 'Reloj de pulsera con correa de cuero', stock: '100' },
    { producto: 'Pantalones vaqueros', empresa: 'Moda Urbana', descripcion: 'Pantalones vaqueros de corte recto', stock: '150' },
    { producto: 'Teléfono inteligente', empresa: 'Electrónica Global', descripcion: 'Teléfono inteligente con pantalla OLED', stock: '80' },
    { producto: 'Mochila escolar', empresa: 'Artículos Escolares', descripcion: 'Mochila con varios compartimentos', stock: '120' },
  ];

  currentPage: number = 1;
  pageSize: number= 5;

  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes: Array<number> = [5, 10, 20];

  ngOnInit(){
    this.visibleData();
    this.pageNumbers();
  }

  visibleData(){
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSupplier.slice(startIndex, endIndex);
  }

  nextPage(){
    this.currentPage++;
    this.visibleData();
  }

  previousPage(){
    this.currentPage--;
    this.visibleData();
  }

  pageNumbers() {
    let totalPages = Math.ceil(this.filteredSupplier.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changePage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visibleData();
  }

  filterData(searchTerm: string) {
    this.filteredSupplier = this.suppliers.filter((item) => {
      return Object.values(item).some((val) => {
        return val.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    this.visibleData();
  }

  changePageSize(pageSize: any) {
    this.pageSize = parseInt(pageSize);
    this.currentPage = 1; 
  }

}
