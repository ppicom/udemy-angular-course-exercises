import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() newNumber = new EventEmitter<number>();

  intervalRef;
  lastEmmittedNumber: number = 0;

  ngOnInit(): void {}

  startGame() {
    this.intervalRef = setInterval(() => {
      this.newNumber.emit(++this.lastEmmittedNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalRef);
  }
}
