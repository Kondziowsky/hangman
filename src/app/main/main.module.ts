import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {ComponentsModule} from '../components/components.module';
import { InitPageComponent } from './init-page/init-page.component';
import { HangmanGameComponent } from './hangman-game/hangman-game.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [InitPageComponent, HangmanGameComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        ComponentsModule,
        SharedModule,
        FormsModule,
    ],
})
export class MainModule { }
