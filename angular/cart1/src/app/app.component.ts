import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: any[] = [];
  c: number = 0;
  dt=new Date()
  constructor()
  {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.products = data);  }
  add()
  {
    this.c++;
  }
  
}
