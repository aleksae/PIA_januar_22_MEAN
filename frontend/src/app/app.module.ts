import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavljivanjeComponent } from './prijavljivanje/prijavljivanje.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KupacPocetnaComponent } from './kupac-pocetna/kupac-pocetna.component';
import { RadnikPocetnaComponent } from './radnik-pocetna/radnik-pocetna.component'

@NgModule({
  declarations: [
    AppComponent,
    PrijavljivanjeComponent,
    KupacPocetnaComponent,
    RadnikPocetnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
