import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Person} from './data.component';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  loadData(): Observable<any> {
      return this.http.get<Person[]>('http://localhost:4000/data', {
        headers: {
          Authorization: `Bearer ${this.userService.token()}`
        }
      });
  }
}
