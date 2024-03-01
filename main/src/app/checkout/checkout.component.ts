import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements AfterContentChecked{
  items: any[] = [];
  total!: number;
  constructor(private ds: DataService) {
    this.items=this.ds.getItems()
  }
  ngAfterContentChecked()
  {
    this.total=this.items.reduce((sum,p)=>sum+p.price,0)
  }
  remove(index:any)
  {
    this.items.splice(index, 1);
    this.ds.remove()
  }
}
