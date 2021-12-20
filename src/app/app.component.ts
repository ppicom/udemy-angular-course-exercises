import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  statuses: { value: string; display: string }[] = [
    { value: 'critial', display: 'Critical' },
    { value: 'stable', display: 'Stable' },
    { value: 'finished', display: 'Finished' },
  ];

  invalidNames = ['Test'];
  forbiddenStates = ['test'];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [
      Validators.required,
      this.isInvalidName.bind(this),
    ]),
    status: new FormControl(
      'stable',
      [Validators.required],
      [this.isInvalidStatus.bind(this)]
    ),
  });

  ngOnInit(): void {}

  private isInvalidName(c: NgControl): { [s: string]: boolean } {
    if (this.invalidNames.includes(c.value)) return { nameIsForbidden: true };
  }

  private isInvalidStatus(c: NgControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenStates.includes(c.value)) {
          resolve({ isForbiddenState: true });
        } else resolve(undefined);
      }, 200);
    });
  }
}
