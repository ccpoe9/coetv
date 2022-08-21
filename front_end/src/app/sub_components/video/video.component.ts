import { HttpParams } from '@angular/common/http';
import { Component, DEFAULT_CURRENCY_CODE, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { RouterService } from 'src/app/services/router.service';
import { TvService } from 'src/app/services/tv.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { Tv } from 'src/app/models/tv.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  movie : Movie;
  show : Tv;
  Name : string;
  Desc : string;
  Genre : string;
  source : string;
  recommended : any[];
  episodes : Episode[];
  seasons : number[] = [];
  currentSeason : number = 1;
  currentEpisode : Episode;
  totalSeasons : number;
  httpParams : HttpParams;
  type : string;
  isPlayed : boolean = false;
  playText : string = 'PLAY'
  constructor(private router : Router, private routerService : RouterService, private movieService : MoviesService,
              private tvservice : TvService) { 
  
  }

  ngOnInit(): void {
    if(this.router.url == '/video'){
      this.router.navigate(['/']);
    }
    if(this.router.url.charAt(9) == 'm'){
      this.movieService.getMovie(this.router.url).subscribe( data => {
        this.type = 'm';
        this.movie = data[0];
        this.Name = this.movie.Name;
        this.Desc = this.movie.Desc;
        this.Genre = this.movie.Genre;
        this.source = this.movie.Video;
        this.getMoviesLikeThis(this.movie.Genre);
      })
    }
    else if(this.router.url.charAt(9) == 's'){
      this.tvservice.getShow(this.router.url).subscribe( data => {
        this.type = 's';
        this.show = data[0][0];
        this.Name = this.show.Name;
        this.Genre = this.show.Genre;
        this.totalSeasons = data[2][0].totalSeasons;
        this.setSeasons(this.totalSeasons);
        this.constructParams(this.show.Name,1);
        this.tvservice.getShowSeason(this.httpParams).subscribe( data => {
          this.episodes = data[0];
          this.Desc = this.episodes[0].Desc;
          this.source = this.episodes[0].Video;
          this.currentEpisode = this.episodes[0];
        });
        this.getShowsLikeThis(this.show.Genre);
      })
    }

  }

  constructParams(showName : string, season : number){
    this.httpParams = new HttpParams()
    .set('showName',showName)
    .set('season',season);
  }

  setSeasons(totalSeasons : number){
    for(let i = 1; i <= this.totalSeasons; i++){
      this.seasons[i-1] = i;
    }
  }

  changeSeason(season : number){
    this.currentSeason = season;
    this.constructParams(this.show.Name,season);
    this.tvservice.getShowSeason(this.httpParams).subscribe( data => {
      this.episodes = data[0];
    });
  }

  changeEpisode(episode : Episode){
    this.currentEpisode = episode;
    this.source = episode.Video;
  }

  getMoviesLikeThis(genre : string){
    this.httpParams = new HttpParams()
      .set('currentPage', 1)
      .set('size', 6)
      .set('search', '')
      .set('genre', genre)
      .set('orderBy', 'Rating')
      .set('orderDir', 'DESC');

    this.movieService.getAllMovies(this.httpParams).subscribe( data => {
      this.recommended = data[0].filter( (item : any ) => { return item.Name != this.movie.Name});
      if(this.recommended.length > 5) { 
        this.recommended.pop();
      }
    });

  }

  getShowsLikeThis(genre : string){
    this.httpParams = new HttpParams()
      .set('currentPage', 1)
      .set('size', 6)
      .set('search', '')
      .set('genre', genre)
      .set('orderBy', 'Rating')
      .set('orderDir', 'DESC');

    this.tvservice.getAllShows(this.httpParams).subscribe( data => {
      this.recommended = data[0].filter( (item : any ) => { return item.Name != this.show.Name});
      if(this.recommended.length > 5) { 
        this.recommended.pop();
      }

    });

  }

  playAction(){
    this.isPlayed=!this.isPlayed;
    this.playText = 'PLAYED';
  }


}
