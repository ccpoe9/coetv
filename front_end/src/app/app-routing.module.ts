import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { ForgotPasswordComponent } from './sub_components/forgot-password/forgot-password.component';
import { LandingComponent } from './sub_components/landing/landing.component';
import { LiveComponent } from './sub_components/live/live.component';
import { LoginComponent } from './sub_components/login/login.component';
import { MoviesComponent } from './sub_components/movies/movies.component';
import { RegisterComponent } from './sub_components/register/register.component';
import { SearchComponent } from './sub_components/search/search.component';
import { SettingsComponent } from './sub_components/settings/settings.component';
import { TvComponent } from './sub_components/tv/tv.component';
import { UploadComponent } from './sub_components/upload/upload.component';
import { VideoComponent } from './sub_components/video/video.component';

const routes: Routes = [
                        {path : '', redirectTo:'landing', pathMatch:'full'},
                        {path : 'login', component : LoginComponent},
                        {path : 'register', component : RegisterComponent},
                        {path : 'forgot-password', component : ForgotPasswordComponent},
                        {path : 'landing', component : LandingComponent, canActivate : [AuthGuard]},
                        {path : 'movies', component : MoviesComponent, canActivate : [AuthGuard]},
                        {path : 'tv', component : TvComponent, canActivate : [AuthGuard]},
                        {path : 'live', component : LiveComponent, canActivate : [AuthGuard]},
                        {path : 'settings', component : SettingsComponent, canActivate : [AuthGuard]},
                        {path : 'video', component : VideoComponent, canActivate : [AuthGuard]},
                        {path : 'upload', component : UploadComponent, canActivate : [AuthGuard]},
                        {path : 'search', component : SearchComponent, canActivate : [AuthGuard]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
