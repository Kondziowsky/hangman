import {NgModule, } from '@angular/core';
import {RouterModule, Routes, } from '@angular/router';
import {InitPageComponent} from '../components/init-page/init-page.component';
import {DataResolver} from '../shared/resolvers/data-resolver';

const MAIN_ROUTER: Routes = [
  {
    path: '', component: InitPageComponent,
    resolve: {
      tablicaHasel: DataResolver
    } ,
    // runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTER), ],
  exports: [RouterModule, ],
})
export class MainRoutingModule {
}

