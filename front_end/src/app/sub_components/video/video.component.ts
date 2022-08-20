import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { RouterService } from 'src/app/services/router.service';
import { TvService } from 'src/app/services/tv.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class VideoComponent implements OnInit {

  previousUrl : string;
  video : any;
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
        this.video = data[0];
        this.getMoviesLikeThis(this.video.Genre);
      })
    }
    else if(this.router.url.charAt(9) == 's'){
      this.tvservice.getShow(this.router.url).subscribe( data => {
        this.type = 's';
        this.video = data[0][0];
        this.totalSeasons = data[2][0].totalSeasons;
        this.setSeasons(this.totalSeasons);
        this.constructParams(this.video.Name,1);
        this.tvservice.getShowSeason(this.httpParams).subscribe( data => {
          this.episodes = data[0];
          this.currentEpisode = this.episodes[0];
        });
        this.getShowsLikeThis(this.video.Genre);
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
    this.constructParams(this.video.Name,season);
    this.tvservice.getShowSeason(this.httpParams).subscribe( data => {
      this.episodes = data[0];
    });
  }

  changeEpisode(episode : Episode){
    this.currentEpisode = episode;
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
      this.recommended = data[0].filter( (item : any ) => { return item.Name != this.video.Name});
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
      this.recommended = data[0].filter( (item : any ) => { return item.Name != this.video.Name});
      if(this.recommended.length > 5) { 
        this.recommended.pop();
      }

    });

  }

  playAction(){

    this.isPlayed=true;

    this.playText = 'PLAYED';
  }


}
