import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './environments';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
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
}
