import { NavComponent } from './nav.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [NavComponent],

})
export class NavModule{

}
