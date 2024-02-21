import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  data= [
    {
      "id": 2,
      "name": "raj",
      "email":"a@a.com"
    },
    {
      "id": 3,
      "name": "shekhar",
      "email":"b@b.com"
    }
  ]
}
