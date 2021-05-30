import { FooterComponent } from './footer.component';
import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
    declarations: [FooterComponent],
    imports: [MatToolbarModule],
    exports: [FooterComponent],
    providers: []
})
export class FooterModule{

}
