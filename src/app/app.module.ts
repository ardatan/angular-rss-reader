import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RSSFeedComponent } from './rss-feed.component';

import { RSSParserService } from './rss-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    RSSFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RSSParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
