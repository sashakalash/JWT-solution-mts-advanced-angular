import {Component} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  styles: [`.pinned {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 150px;
      height: 40px;
      background-color: azure;
      border: 1px solid blue;
      padding: 5px;
  }
  `],
  template: `
      <input placeholder="User name" #username size="10">
      <input placeholder="Password" #password size="10">
      <button (click)="login(username.value, password.value)">Login</button>
      | {{ userService.user && userService.user.username || 'no login' }} |
      <a [routerLink]="['/']">Home</a> |
      <a [routerLink]="['mydata']">Data</a> |
      <a [routerLink]="['admin']">Admin</a> |

      <router-outlet></router-outlet>

      <div class="pinned">
          <router-outlet name="pinned"></router-outlet>
      </div>
  `
})
export class AppComponent {

  constructor(public userService: UserService) {
  }

  login(username: string, password: string) {
    this.userService.login(username, password);
  }
}
