import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() prasad = new EventEmitter()
  count: number = 0;
  value=''
  name="raj"
  incr()
  {
  console.log(this.count)
     this.prasad.emit(this.count++)
  }
  decr()
  {
    this.count--
  }
}
