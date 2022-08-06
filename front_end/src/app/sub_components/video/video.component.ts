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
  movie : Movie[];
  constructor(private router : Router, private routerService : RouterService, private movieService : MoviesService) { 
  
  }

  ngOnInit(): void {
    this.previousUrl = this.routerService.getPreviousUrl();
    if(this.router.url == '/video'){
      this.router.navigate(['/']);
    }
    
    if(this.previousUrl == '/movies'){
      
    }

    this.movieService.getMovie(this.router.url).subscribe( data => {
      this.movie = data;
    })
  }

}
