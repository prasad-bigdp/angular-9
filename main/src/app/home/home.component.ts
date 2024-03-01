import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  topProducts: any[] = [];
  categories: any[] = [];
  constructor(private ds:DataService)
  {
    this.ds.getData(10).subscribe((data: any) => this.topProducts = data.products);
    this.ds.getCategories().subscribe((data:any)=>this.categories=data)
  }
  add(p:any)
  {
    console.log(p)
    this.ds.add(p)
  }
}
