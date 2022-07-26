import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './sub_components/landing/landing.component';
import { LiveComponent } from './sub_components/live/live.component';
import { MoviesComponent } from './sub_components/movies/movies.component';
import { SettingsComponent } from './sub_components/settings/settings.component';
import { TvComponent } from './sub_components/tv/tv.component';

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
