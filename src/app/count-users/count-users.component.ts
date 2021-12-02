import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountingService } from '../counting.service';

@Component({
  selector: 'app-count-users',
  templateUrl: './count-users.component.html',
  styleUrls: ['./count-users.component.css'],
})
export class CountUsersComponent implements OnInit {
  toActive: number = 0;
  toInactive: number = 0;

  constructor(public countingService: CountingService) {}

  ngOnInit(): void {
    this.toActive = this.countingService.switchesToActive;
    this.toInactive = this.countingService.switchesToInactive;
  }
}
