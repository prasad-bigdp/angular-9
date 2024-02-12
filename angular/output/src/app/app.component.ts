import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(HeaderComponent) hc!:HeaderComponent
  title = 'output';
  v = ''
    
  c=0;
  i(e:any)
  {
   this.c=e
  }
  fun()
  {
    this.v = this.hc.value;
    
  }
}
