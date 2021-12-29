import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercises';

  elements = [
    {
      ID: 1,
      name: 'John',
    },
    {
      ID: 2,
      name: 'Anna Karenina',
    },
    {
      ID: 3,
      name: 'Albiol',
    },
    {
      ID: 4,
      name: 'Raimunda',
    },
    {
      ID: 5,
      name: 'Segismundo',
    },
  ];
}
