import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isLoggedIn: boolean = false;
  private userSource = new BehaviorSubject<User>(new User());
  user = this.userSource.asObservable();
  set me(user: User) {
    localStorage.setItem('account', JSON.stringify(user));
    this.userSource.next(user);
  }
}
