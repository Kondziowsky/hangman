import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ModalGameOverComponent } from './modal-game-over/modal-game-over.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [FooterComponent, ModalGameOverComponent],
    exports: [
        FooterComponent,
      ModalGameOverComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents: [
    ModalGameOverComponent
  ]
})
export class ComponentsModule { }
