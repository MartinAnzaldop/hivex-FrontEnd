import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts:Product []=[];
  constructor(private router: Router, private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this._productService.getProducts().subscribe(data=>{
      console.log(data.products);
      this.listProducts=data.products;
    },error=>{
    console.log(error)
    })
  }

  deleteProduct(id:any){
    this._productService.deleteProduct(id).subscribe(data=>{
    this.getProducts();
    this.router.navigate(['/listProducts'])
    },error=>{
      console.log(error)
    })
  }


  }


