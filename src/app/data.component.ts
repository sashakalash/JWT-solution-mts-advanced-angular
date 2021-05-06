import {Component} from "@angular/core";
import {DataService} from "./data.service";

export interface Person {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    ip_address: string;
}
@Component({
    selector: 'app-product',
    template: `<h1 class="stock">Person list</h1>
    
        <div *ngFor="let p of persons">
            <a  
            [routerLink]="['/person',p.id,p.first_name+' '+p.last_name]">
                {{p.id}}
                {{p.first_name}}
                {{p.last_name}}
            </a> &nbsp; 
            <a [routerLink]="['', {outlets: { pinned: p.first_name+' '+p.last_name}}]">pin</a>
        </div>
    `,
    styles: ['.stock {background: cyan}']
})
export class DataComponent {
    persons: Person[];

    constructor(private dataService: DataService) {
        this.dataService.loadData().subscribe(data =>
            this.persons = data.filter((p,i) => i<30));
    }



}

