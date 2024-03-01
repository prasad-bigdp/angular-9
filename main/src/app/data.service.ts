import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './environments';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
  private arr:any=[]
  private cartSubject = new BehaviorSubject(0);
  private cartItemsSubject = new BehaviorSubject(this.arr);
  cartObs = this.cartSubject.asObservable();
  cartItemsObs= this.cartItemsSubject.asObservable()
  getData(limit?:number)
  {
    if (limit) {
     return this.hc.get(`${API_URL}?limit=${limit}`);
    }
    else {
      return this.hc.get(`${API_URL}`);
    }
    
  }
  getCategories()
  {
    return this.hc.get(`${API_URL}/categories`);
  }
  getProduct(id: number)
  {
    return this.hc.get(`${API_URL}/${id}`)
  }
  add(i:any)
  {
    const count = this.cartSubject.getValue()
    this.cartSubject.next(count + 1)
    const items = this.cartItemsSubject.getValue()
    this.cartItemsSubject.next([ ...items, i ])
    console.log(this.cartSubject.value,this.cartItemsSubject.getValue())
  }
  remove()
  {
     const count = this.cartSubject.getValue();
     this.cartSubject.next(count - 1);
  }
  getValue()
  {
    
    return this.cartSubject.getValue()
  }
  getItems()
  {
    return this.cartItemsSubject.getValue()
  }
}
