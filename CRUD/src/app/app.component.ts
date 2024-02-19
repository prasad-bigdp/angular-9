import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:any=[]
  constructor(private cs: CrudService) {
    this.cs.getData()
      .subscribe((data) => this.products = data)
  }
  del(id: any)
  {
    this.cs.deleteData(id).subscribe((data) => this.products = data);
    window.location.reload()
  }
}
