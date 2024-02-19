import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private hc: HttpClient) { }
  getData()
  {
    return this.hc.get('http://localhost:3000/products');
  }
  deleteData(id:any)
  {
    return this.hc.delete(`http://localhost:3000/products/${id}`);
  }
  postData(data: any)
  {
    return this.hc.post('http://localhost:3000/products',data)
  }
  putData(data: any, id: number) {
    return this.hc.put(`http://localhost:3000/products/${id}`,data);
  }
}
