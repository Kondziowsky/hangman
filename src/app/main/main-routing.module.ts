import {NgModule, } from '@angular/core';
import {RouterModule, Routes, } from '@angular/router';
import {InitPageComponent} from './init-page/init-page.component';
import {HangmanGameComponent} from './hangman-game/hangman-game.component';
import {DataResolver} from '../shared/resolvers/data-resolver';

const MAIN_ROUTER: Routes = [
  {
    path: '', component: InitPageComponent,
    // children: [
    //   {
    //     path: 'hangman', component: HangmanGameComponent,
    //     resolve: {
    //       tablicaHasel: DataResolver
    //     } ,
    //   },
    // ],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'hangman', component: HangmanGameComponent,
    resolve: {
      tablicaHasel: DataResolver
    } ,
  },
  {path: '**', redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTER), ],
  exports: [RouterModule, ],
})
export class MainRoutingModule {
}

