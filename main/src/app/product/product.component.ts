import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id!: number;
  product: any;
  constructor(private ds:DataService,r: ActivatedRoute,) {
    r.params.subscribe((data) => {
      this.id= data['id'];
      this.ds
        .getProduct(this.id)
        .subscribe((data: any) => (this.product = data));
    }
    );
   
  }
  ngOnInit()
  {
     
  }

}
