import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {CharComponent} from './char/char.component';

const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'char', component: CharComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
