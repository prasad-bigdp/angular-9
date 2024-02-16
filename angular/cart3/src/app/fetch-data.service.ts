import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private hc: HttpClient) { }
  
  getData()
  {
    console.log("get data started");
    return this.hc.get('https://fakestoreapi.com/products');
  }
  getCategoryData(str:string) {
    return this.hc.get(`https://fakestoreapi.com/products/category/${str}`);
  }
}
