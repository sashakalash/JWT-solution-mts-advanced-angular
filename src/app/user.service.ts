import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface User {
  id: number;
  username: string;
  role: string;
  token: string;
}

@Injectable({providedIn: 'root'})
export class UserService {
  user: User;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    this.http.post<User>('http://localhost:4000/authenticate', {username, password})
        .subscribe(value => {
          console.log(`user=${value.username} token=${value.token} role=${value.role}`);
          this.user = value;
        });
  }

  token(): string {
    return this.user && this.user.token || 'no token';
  }
}

