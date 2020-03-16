import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharRaceComponent } from './char-race/char-race.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ClarsComponent } from './clars/clars.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipsComponent } from './tips/tips.component';
import { CharClassComponent } from './char-class/char-class.component';
import { SessionStateService } from './services/session-state.service';
import { ImagesService } from './services/images.service';

@NgModule({
  declarations: [
    AppComponent,
    CharRaceComponent,
    StartPageComponent,
    ClarsComponent,
    TipsComponent,
    CharClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SessionStateService, ImagesService],
  bootstrap: [AppComponent],
  entryComponents: [ClarsComponent]
})
export class AppModule { }
