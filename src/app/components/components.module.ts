import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { InitPageComponent } from './init-page/init-page.component';

@NgModule({
    declarations: [FooterComponent, InitPageComponent],
    exports: [
        FooterComponent,
        InitPageComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
