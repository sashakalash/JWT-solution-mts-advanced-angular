import {Component} from "@angular/core";
import {DataService} from "./data.service";
import {Person} from "./data.component";

@Component({
    selector: 'app-product',
    template: `<h1 class="stock">Person list</h1>
    
        <div *ngFor="let p of persons">
            <a>
                {{p.id}}
                {{p.first_name}}
                {{p.last_name}}
            </a>
            <button style="font-size: 4pt">EDIT</button>
            <button style="font-size: 4pt">DELETE</button>
        </div>
    `,
    styles: ['.stock {background: cyan}']
})
export class AdminDataComponent {
    persons: Person[];

    constructor(private dataService: DataService) {
        this.dataService.loadData().subscribe(data =>
        this.persons = data.filter((p,i) => i<30));
    }



}

