import { HttpParams } from '@angular/common/http';
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

  currentPage : number = 2;
  size : number = 20;
  search : string = '';
  orderBy : string = 'id';
  orderDir : string = 'DESC'
  httpParams : HttpParams;
  


  ngOnInit(): void {
    this.constructParams(this.currentPage, this.size, this.search, this.orderBy, this.orderDir);
    this.getAllMovies();

  }

  constructParams(currentPage : number,
    size : number,
    search : string,
    orderBy : string,
    orderDir : string){
    
      this.httpParams = new HttpParams()
      .set('currentPage', currentPage)
      .set('size', size)
      .set('search', search)
      .set('orderBy', orderBy)
      .set('orderDir', orderDir);
  }

  getAllMovies(){
      this.moviesService.getAllMovies(this.httpParams).subscribe(data =>{
        this.movies = data;
    });
  }

  getNextMovies(nextPage : number){
    this.httpParams.set('currentPage', nextPage);
    this.getAllMovies();
  }


}
