import { Component } from "@angular/core"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0;
 prod = {
   name: "Samsung 9",
   price: 20000
  }
  add()
  {
    this.count++;
  }
}
