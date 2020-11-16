import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnlyLetterDirective} from './directives/only-letter/only-letter.directive';

@NgModule({
  declarations: [OnlyLetterDirective],
  exports: [
    OnlyLetterDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
