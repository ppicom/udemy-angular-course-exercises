import { Injectable } from '@angular/core';
import { CountingService } from './counting.service';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private _activeUsers: User[] = [new User('Maria Carey')];
  private _inactiveUsers: User[] = [];

  constructor(private countingService: CountingService) {}

  get activeUsers(): User[] {
    return this._activeUsers;
  }

  get inactiveUsers(): User[] {
    return this._inactiveUsers;
  }

  markInactive(i: number) {
    this._inactiveUsers.push(this._activeUsers[i]);
    this._activeUsers.splice(i, 1);
    this.countingService.countSwitchToInactive();
  }

  markActive(i: number) {
    this._activeUsers.push(this._inactiveUsers[i]);
    this._inactiveUsers.splice(i, 1);
    this.countingService.countSwitchToActive();
  }

  addNewUser(name: string) {
    this._activeUsers.push(new User(name));
  }
}
