import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService : MoviesService) { }

  movies : Movie[];

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
      this.moviesService.getAllMovies().subscribe(data =>{
      this.movies = data;
    });
    console.log(this.movies)
  }

}
