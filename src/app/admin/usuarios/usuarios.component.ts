import { Component, OnInit } from '@angular/core';

interface Supplier{
  username: string,
  address: string,
  email:string,
  phone: string

}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent  {

  suppliers: Array<Supplier> = [
    {username: 'UsuarioA', address: 'Calle Principal 123', phone: '9876543210', email: 'usuarioA@example.com'},
    {username: 'UsuarioB', address: 'Avenida Central 456', phone: '9871234560', email: 'usuarioB@example.com'},
    {username: 'UsuarioC', address: 'Plaza Mayor 789', phone: '9870123456', email: 'usuarioC@example.com'},
    {username: 'UsuarioD', address: 'Avenida Secundaria 321', phone: '9877654321', email: 'usuarioD@example.com'},
    {username: 'UsuarioE', address: 'Calle Peatonal 654', phone: '9872345678', email: 'usuarioE@example.com'},
    {username: 'UsuarioF', address: 'Paseo del Sol 987', phone: '9875432109', email: 'usuarioF@example.com'},
    {username: 'UsuarioG', address: 'Boulevard de las Flores 159', phone: '9874321098', email: 'usuarioG@example.com'},
    {username: 'UsuarioH', address: 'Calle de la Luna 357', phone: '9872109876', email: 'usuarioH@example.com'},
    {username: 'UsuarioI', address: 'Avenida de los Árboles 753', phone: '9876789012', email: 'usuarioI@example.com'},
    {username: 'UsuarioJ', address: 'Calle del Puente 246', phone: '9870987654', email: 'usuarioJ@example.com'},
    {username: 'UsuarioK', address: 'Camino Viejo 159', phone: '9878765432', email: 'usuarioK@example.com'},
    {username: 'UsuarioL', address: 'Calle Nueva 357', phone: '9875678901', email: 'usuarioL@example.com'},
    {username: 'UsuarioM', address: 'Avenida de la Montaña 753', phone: '9873456789', email: 'usuarioM@example.com'},
    {username: 'UsuarioN', address: 'Boulevard de la Costa 246', phone: '9876543210', email: 'usuarioN@example.com'},
    {username: 'UsuarioO', address: 'Paseo del Río 159', phone: '9871234567', email: 'usuarioO@example.com'},
    {username: 'UsuarioP', address: 'Calle del Mar 357', phone: '9870123456', email: 'usuarioP@example.com'},
    {username: 'UsuarioQ', address: 'Avenida del Viento 753', phone: '9879876543', email: 'usuarioQ@example.com'},
    {username: 'UsuarioR', address: 'Calle de la Nube 246', phone: '9878765432', email: 'usuarioR@example.com'},
    {username: 'UsuarioS', address: 'Boulevard del Cielo 159', phone: '9877654321', email: 'usuarioS@example.com'},
    {username: 'UsuarioT', address: 'Paseo de las Estrellas 357', phone: '9876543210', email: 'usuarioT@example.com'},
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
