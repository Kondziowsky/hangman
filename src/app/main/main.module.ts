import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {ComponentsModule} from '../components/components.module';
import { InitPageComponent } from './init-page/init-page.component';
import { HangmanGameComponent } from './hangman-game/hangman-game.component';

@NgModule({
  declarations: [InitPageComponent, HangmanGameComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
  ]
})
export class MainModule { }
