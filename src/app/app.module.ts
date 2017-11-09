import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabContainerComponent, LogComponent, TabComponent, TabContainerService } from './tab-container.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, TabContainerComponent, TabComponent, LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TabContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
