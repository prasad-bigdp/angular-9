import { AfterViewChecked, Component, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  c = 0;
  constructor(private ds:DataService)
  {
       this.ds.cartObs.subscribe((data:any)=>this.c=data)
  }
 
}
