
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/products';





@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  ProductForm: FormGroup;
  constructor(private fb: FormBuilder ) {
    this.ProductForm=this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required],
      stock:['', Validators.required],
      image:['', Validators.required],
      category:['', Validators.required],
      description:['', Validators.required]
  })
  }

  ngOnInit(): void {

  }

  addProduct(){
     const Product: Product  = {
      name: this.ProductForm.get('name')?.value,
      price: this.ProductForm.get('price')?.value,
      stock: this.ProductForm.get('stock')?.value,
      image: this.ProductForm.get('image')?.value,
      category: this.ProductForm.get('category')?.value,
      description: this.ProductForm.get('description')?.value
    }
    console.log(Product);
  }

}