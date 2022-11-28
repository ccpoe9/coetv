import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AboutusComponent } from './sub_components/aboutus/aboutus.component';
import { ChecklistComponent } from './sub_components/checklist/checklist.component';
import { DmcaComponent } from './sub_components/dmca/dmca.component';
import { ForgotPasswordComponent } from './sub_components/forgot-password/forgot-password.component';
import { LandingComponent } from './sub_components/landing/landing.component';
import { LiveComponent } from './sub_components/live/live.component';
import { LoginComponent } from './sub_components/login/login.component';
import { MoviesComponent } from './sub_components/movies/movies.component';
import { RegisterComponent } from './sub_components/register/register.component';
import { SearchComponent } from './sub_components/search/search.component';
import { SitedescComponent } from './sub_components/sitedesc/sitedesc.component';
import { TvComponent } from './sub_components/tv/tv.component';
import { UploadComponent } from './sub_components/upload/upload.component';
import { VideoComponent } from './sub_components/video/video.component';

const routes: Routes = [
                        {path : '', redirectTo:'home', pathMatch:'full'},
                        {path : 'login', component : LoginComponent},
                        {path : 'register', component : RegisterComponent},
                        {path : 'forgot-password', component : ForgotPasswordComponent},
                        {path : 'home', component : LandingComponent},
                        {path : 'movies', component : MoviesComponent},
                        {path : 'tv', component : TvComponent},
                        {path : 'live', component : LiveComponent},
                        {path : 'video', component : VideoComponent},
                        {path : 'upload', component : UploadComponent, canActivate : [AuthGuard]},
                        {path : 'search', component : SearchComponent},
                        {path : 'dmca', component : DmcaComponent},
                        {path : 'aboutus', component : AboutusComponent},
                        {path : 'checklist', component : ChecklistComponent},
                        {path : 'sitedesc', component : SitedescComponent},
                        { path: '**', redirectTo: '/home'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
