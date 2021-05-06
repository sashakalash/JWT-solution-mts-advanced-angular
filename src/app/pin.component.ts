import {Component} from "@angular/core";
import {DataService} from "./data.service";
import {ActivatedRoute} from "@angular/router";

export interface Person {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    ip_address: string;
}
@Component({
    selector: 'app-product',
    template: `<b>Pinned person:</b> {{name}}`,
    styles: ['.stock {background: cyan}']
})
export class PinComponent {
    name: string;
    constructor(route: ActivatedRoute) {
        route.paramMap.subscribe(
            params => {
                this.name = params.get('name');
            });
    }


}

