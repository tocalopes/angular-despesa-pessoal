import { HeaderComponent } from './header.component';
import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
    declarations: [HeaderComponent],
    imports: [MatToolbarModule],
    exports: [HeaderComponent],
    providers: []
})
export class HeaderModule{

}