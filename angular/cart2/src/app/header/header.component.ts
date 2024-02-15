import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  c:number=0
  constructor(private cs:CartService)
  {

  }
 

}
