import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('inputName', { static: true }) inputName: ElementRef;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();
    const name = this.inputName.nativeElement.value;
    this.usersService.addNewUser(name);
  }
}
