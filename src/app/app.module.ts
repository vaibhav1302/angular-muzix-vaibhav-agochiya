import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavBoxComponent } from './fav-box/fav-box.component';
import { FavCardComponent } from './fav-card/fav-card.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchCardComponent } from './search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FavBoxComponent,
    FavCardComponent,
    SearchBoxComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
