import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/add-product';
import { ProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProducts:Product []=[];

  currentPage: number = 1;
  pageSize: number = 5;
  pageSizes: Array<number> = [5, 10, 20];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      console.log(data.products);
      this.listProducts=data.products;
    },error=>{
    console.log(error)
    })
  }

  agregarProducto() {
    this.router.navigate(['/agregar-producto']);
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(data=>{
    this.getProducts();
    this.router.navigate(['/product-list'])
    },error=>{
      console.log(error)
    })
  }




  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }

  pageNumbers(): number[] {
    const totalPages = Math.ceil(this.listProducts.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  changePageSize(pageSize: any) {
    this.pageSize = parseInt(pageSize, 10);
    this.currentPage = 1;
  }
}
