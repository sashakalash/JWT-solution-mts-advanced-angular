import {RouterModule, Routes} from '@angular/router';
import {DataResolver} from './data.resolver';
import {DataComponent} from './data.component';
import {PersonDetailComponent} from './person.detail.component';
import {PersonDescriptionComponent} from './person.description.component';
import {LoginGuard} from './login.guard';
import {PinComponent} from './pin.component';

const routes: Routes = [
    {
        path: 'mydata', component: DataComponent,
        resolve: {
            mydata: DataResolver
        }
    },
    {
        path: 'person/:id/:name', component: PersonDetailComponent,
        children: [
            {path: 'details/:id', component: PersonDescriptionComponent}
        ]
    },
    {path: ':name', component: PinComponent, outlet: 'pinned'},
    {
        path: 'admin',
        loadChildren:
            () => import('./admin.module')
                .then(m => m.AdminModule),
        canActivate: [LoginGuard],
    }
];

export const routing = RouterModule.forRoot(routes);
