import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {CharRaceComponent} from './char-race/char-race.component';
import {CharClassComponent} from './char-class/char-class.component';

const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'char-race', component: CharRaceComponent},
  {path: 'char-class', component: CharClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
