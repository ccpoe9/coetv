import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared_components/navbar/navbar.component';
import { LandingComponent } from './sub_components/landing/landing.component';
import { MoviesComponent } from './sub_components/movies/movies.component';
import { TvComponent } from './sub_components/tv/tv.component';
import { LiveComponent } from './sub_components/live/live.component';
import { SettingsComponent } from './sub_components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    TvComponent,
    LiveComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
