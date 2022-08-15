import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  previousUrl : string;
  movie : Movie;
  recommendedMovies : Movie[];
  httpParams : HttpParams;
  constructor(private router : Router, private routerService : RouterService, private movieService : MoviesService) { 
  
  }

  ngOnInit(): void {
    this.previousUrl = this.routerService.getPreviousUrl();
    if(this.router.url == '/video'){
      this.router.navigate(['/']);
    }

    this.movieService.getMovie(this.router.url).subscribe( data => {
      this.movie = data[0];
      this.getMoviesLikeThis(this.movie.Genre);
    })
  }

  getMoviesLikeThis(genre : string){
    this.httpParams = new HttpParams()
      .set('currentPage', 1)
      .set('size', 5)
      .set('search', '')
      .set('genre', genre)
      .set('orderBy', 'Rating')
      .set('orderDir', 'DESC');

    this.movieService.getAllMovies(this.httpParams).subscribe( data => {
      this.recommendedMovies = data[0];
    })
  }

}
