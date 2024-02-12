import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin = false;
  day!: number;
  day2!:number
  login()
  {
    this.isLogin=true
  }
  click()
  {
    this.day2 = this.day
    console.log(this.day2)
  }
}
