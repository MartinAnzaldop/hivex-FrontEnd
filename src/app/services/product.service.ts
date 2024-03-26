import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' class
import { Observable } from 'rxjs';
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://backendlyon.onrender.com/product/';
  urldelete='https://backendlyon.onrender.com/product/delete/'
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete(this.urldelete+id);
  }

  addProduct(product:Product):Observable<any>{
    return this.http.post(this.url, product);
  }
}

