import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroresModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
