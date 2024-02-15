import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  constructor( private htp:HttpClient) { }

  message(msg:string)
  {
    alert(msg)
  }
  add()
  {
    this.count++;
    console.log(this.count,"added")
  }
  getCount()
  {
    return this.count;
  }

  getData()
  {
  return this.htp.get('https://api.escuelajs.co/api/v1/products');
  }
}
