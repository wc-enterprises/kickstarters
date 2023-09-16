import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Modules
/**
 * App Module
 *    Home Module
 *    - About
 *    - First Page
 *     Shop Module
 *      - Separate pages for every section
 *     Support Module
 *      - FAQ's and such related things
 */
