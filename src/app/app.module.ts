import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {DataComponent} from './data.component';
import {HttpClientModule} from '@angular/common/http';
import {PersonDetailComponent} from './person.detail.component';
import {PersonDescriptionComponent} from './person.description.component';
import {PinComponent} from './pin.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    PersonDetailComponent,
    PersonDescriptionComponent,
    PinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
