import {Component} from '@angular/core';
import {DataService} from './data.service';
import {ActivatedRoute} from '@angular/router';
import {Person} from './data.component';

@Component({
    selector: 'app-person-description',
    template: `<h2>Full person info</h2>
        Id: {{person.id}}<br>
        Name: {{person.first_name}}<br>
        Surname: {{person.last_name}}<br>
        Gender: {{person.gender}}<br>
        IP: {{person.ip_address}}<br>
    `
})
export class PersonDescriptionComponent {
    person: Person = {} as Person;

    constructor(route: ActivatedRoute, private dataService: DataService) {
        route.parent.paramMap.subscribe(
            params => {
                const id = +params.get('id');
                this.dataService.loadData().subscribe(data =>
                    this.person =
                        data.filter(
                            p => p.id === id
                        )[0]
                );
            });
    }



}
