import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient,private router:Router) { }
  productsUrl:string= "http://localhost:3000/products";
  categoriesUrl:string = "http://localhost:3000/categories";
  
  getAllProducts():Observable<any>{
     return this.httpClient.get<any>(this.productsUrl);
  }

  getProductDetails(productId):Observable<any>{
    return this.httpClient.get<any>(this.productsUrl+"?id="+productId);
 }

  getAllCategories():Observable<any>{
    return this.httpClient.get<any>(this.categoriesUrl);
  }

  getProductsByCategoryId(categoryId):Observable<any>{
    return this.httpClient.get<any>(this.productsUrl+"?category_id="+categoryId);
  }

 
}
