import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminDataComponent} from "./admin.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AdminDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminDataComponent }
    ])
  ],
})
export class AdminModule { }
