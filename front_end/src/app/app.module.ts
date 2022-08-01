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
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './sub_components/login/login.component';
import { RegisterComponent } from './sub_components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './sub_components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    TvComponent,
    LiveComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }