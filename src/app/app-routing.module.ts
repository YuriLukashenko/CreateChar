import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {CharRaceComponent} from './char-race/char-race.component';
import {CharClassComponent} from './char-class/char-class.component';
import {CharThemeComponent} from './char-theme/char-theme.component';
import {FinalPageComponent} from './final-page/final-page.component';

const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'char-race', component: CharRaceComponent},
  {path: 'char-class', component: CharClassComponent},
  {path: 'char-theme', component: CharThemeComponent},
  {path: 'final-page', component: FinalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
