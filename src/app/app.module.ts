import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PinstripeCardComponent } from './app-core/pinstripe-card/pinstripe-card.component';
import { TitlebarComponentComponent } from './app-core/titlebar-component/titlebar-component.component';
import { HomePageComponent } from './app-core/home-page/home-page.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    PinstripeCardComponent,
    TitlebarComponentComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
