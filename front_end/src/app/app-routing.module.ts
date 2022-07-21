import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LiveComponent } from './live/live.component';
import { MoviesComponent } from './movies/movies.component';
import { SettingsComponent } from './settings/settings.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [{path : '', component : LandingComponent},
                        {path : 'movies', component : MoviesComponent},
                        {path : 'tv', component : TvComponent},
                        {path : 'live', component : LiveComponent},
                        {path : 'settings', component : SettingsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
