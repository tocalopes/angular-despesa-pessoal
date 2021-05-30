import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card"

@NgModule({
  declarations : [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule{

}
