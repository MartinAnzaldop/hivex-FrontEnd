import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'https://backendlyon.onrender.com/product/';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('description', product.description);
    formData.append('image', product.image);

    return this.http.post<Product>(this.apiUrl, formData);
  }
}
