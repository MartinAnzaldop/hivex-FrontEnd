import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts:Product []=[];
  constructor(private router: Router, private _productService: ProductService, private Toast: ToastrService) { }

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

  deleteProduct(_id:any){
    this._productService.deleteProduct(_id).subscribe(data=>{
    this.getProducts();
    this.router.navigate(['/listProducts'])
    this.Toast.info('Product deleted successfully', 'Success');
    },error=>{
      console.log(error)
    })
  }


  }


