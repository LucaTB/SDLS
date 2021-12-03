import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BandsComponent } from './pages/bands/bands.component';
import { WhoComponent } from './pages/who/who.component';
import { AsociarseComponent } from './pages/asociarse/asociarse.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNavbarComponent,
    HomeComponent,
    BandsComponent,
    WhoComponent,
    AsociarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
