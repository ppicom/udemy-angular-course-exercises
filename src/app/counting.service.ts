import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountingService {
  private _toActive: number = 0;
  private _toInactive: number = 0;

  get switchesToActive(): number {
    return this._toActive;
  }

  get switchesToInactive(): number {
    return this._toInactive;
  }

  countSwitchToActive() {
    this._toActive++;
  }

  countSwitchToInactive() {
    this._toInactive++;
  }
}
