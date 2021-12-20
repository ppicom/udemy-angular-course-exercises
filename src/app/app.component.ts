import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  levels: { value: string; display: string }[] = [
    {
      display: 'Pro',
      value: 'pro',
    },
    {
      display: 'Advanced',
      value: 'advanced',
    },
    {
      display: 'Basic',
      value: 'basic',
    },
  ];

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
