import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
  ]
})
export class MainModule { }
