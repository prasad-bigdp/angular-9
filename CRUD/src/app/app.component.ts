import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: any = [];
  hide = true;
  upd=false
  title = ''; price = 0; url = ''; id = 0;
  constructor(private cs: CrudService) {
    this.cs.getData()
      .subscribe((data) => this.products = data)
  }
  del(id: any)
  {
    this.cs.deleteData(id).subscribe((data) => this.products = data);
    window.location.reload()
  }
  open()
  {
    if (this.hide) {
      this.hide = false;
      document.body.classList.add('overlay')
    }
    else {
      this.hide=true
    }
  }
  close()
  {
    this.hide=false
  }
  submit()
  {
    let newData = {
      "id": this.id,
      "title": this.title,
      "price": this.price,
      "image":this.url
    }
    this.hide = true
    console.log(newData)
    if (this.upd)
    {
      
      }
    this.cs.postData(newData).subscribe((data) => { console.log(data); this.products = data;window.location.reload() })
  }
  update(id:any)
  {
    this.open();
    let newData = {
      id: this.id,
      title: this.title,
      price: this.price,
      image: this.url,
    };
    
    console.log(newData);
    this.cs.putData(newData,this.id).subscribe((data) => console.log(data));

  }
}
