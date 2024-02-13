import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  arr = [2, 3, 5, 7, 9, 5, 6];
  arr2 = [
    {
      name: 'raj',
      age: 20,
      pic: 'https://oshiprint.in/image/cache/catalog/poster/new/mqp1380-320x320h.jpeg.webp',
    },
    {
      name: 'shekhar',
      age: 2,
      pic: 'https://oshiprint.in/image/cache/catalog/poster/new/mqp1380-320x320h.jpeg.webp',
    },
  ];
  arr3:any[]=[]
  constructor()
  {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => { this.arr3 = data; console.log(this.arr3) })
  }

}
