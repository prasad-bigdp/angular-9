import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0;
 isEvenOdd=true
  incr()
  {
    this.count++;
      this.isEvenOdd = this.count % 2 == 0;
  }
  decr()
  {
    this.count--;
      this.isEvenOdd = this.count % 2 == 0;
  }
  reset()
  {
    this.count = 0;
  }
}
