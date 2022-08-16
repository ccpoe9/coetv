import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { RouterService } from 'src/app/services/router.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  previousUrl : string;
  video : any;
  recommended : any[];
  httpParams : HttpParams;
  constructor(private router : Router, private routerService : RouterService, private movieService : MoviesService,
              private tvservice : TvService) { 
  
  }

  ngOnInit(): void {
    if(this.router.url == '/video'){
      this.router.navigate(['/']);
    }
    if(this.router.url.charAt(9) == 'm'){
      this.movieService.getMovie(this.router.url).subscribe( data => {
        this.video = data[0];
        this.getMoviesLikeThis(this.video.Genre);
      })
    }
    else if(this.router.url.charAt(9) == 's'){
      this.tvservice.getShow(this.router.url).subscribe( data => {
        this.video = data[0];
      })
    }

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

}
