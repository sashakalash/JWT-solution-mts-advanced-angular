import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-person',
    styles: ['.product {background: cyan}'],
    template: `
      <div class="product">
        <h1>Person Details:</h1>
        {{id}} {{name}}  
        <router-outlet></router-outlet>
        <p><a [routerLink]="['./details',id]">Details</a></p>
      </div>
    `
})
export class PersonDetailComponent {
  name: string;
  id: number;
  constructor(route: ActivatedRoute) {
      route.paramMap.subscribe(
          params => {
              this.id = +params.get('id');
              this.name = params.get('name');
          });
  }
}
