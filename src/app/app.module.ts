import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharComponent } from './char/char.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ClarsComponent } from './clars/clars.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    CharComponent,
    StartPageComponent,
    ClarsComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClarsComponent]
})
export class AppModule { }
