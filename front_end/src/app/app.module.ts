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
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './sub_components/login/login.component';
import { RegisterComponent } from './sub_components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './sub_components/forgot-password/forgot-password.component';
import { VideoComponent } from './sub_components/video/video.component';
import { RouterService } from './services/router.service';
import { VjsPlayerComponent } from './shared_components/videojs/videojs.component';
import { UploadComponent } from './sub_components/upload/upload.component';
import { FooterComponent } from './shared_components/footer/footer.component';
import { SearchComponent } from './sub_components/search/search.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { YoutubePlayerComponent } from './shared_components/youtube-player/youtube-player.component';
import { DmcaComponent } from './sub_components/dmca/dmca.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    TvComponent,
    LiveComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VideoComponent,
    VjsPlayerComponent,
    UploadComponent,
    FooterComponent,
    SearchComponent,
    YoutubePlayerComponent,
    DmcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private routerService: RouterService){}
 }
