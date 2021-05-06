import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate() {
    const user = this.userService.user;
    if (!user) {
      return false;
    }
    return user.role === 'ADMIN';
  }
}
