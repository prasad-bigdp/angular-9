import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: any[] = [];
  constructor(private cs:CartService) {
    this.cs.getData().subscribe((data)=>console.log(data))
  }
  add() {
    console.log("added")
    this.cs.add()
  }
}
