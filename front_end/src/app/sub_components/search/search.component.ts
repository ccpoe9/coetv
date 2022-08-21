import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { Tv } from 'src/app/models/tv.model';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private router : Router, private movieService : MoviesService, private tvservice : TvService) { }

  httpParams : HttpParams;

  movies : Movie[];
  totalMovieRecords : number;
  totalMoviePages : number;
  currentPageMovie : number = 1;
  startPageMovie : number = 1;
  endPageMovie : number = 6;
  pageNumbersMovie : number[] = [0,0,0,0,0,0];

  shows : Tv[];
  totalShowRecords : number;
  totalShowPages : number;
  currentPageShow : number = 1;
  startPageShow : number = 1;
  endPageShow : number = 6;
  pageNumbersShow : number[] = [0,0,0,0,0,0];

  searchVal: string;

  ngOnInit(): void {
    this.searchVal = decodeURIComponent(this.router.url).substring(10).trim();
    this.constructParams(1,5,this.searchVal,'','Rating','DESC');
    this.getAllMovies();
    this.getAllShows();
  }
  getAllMovies(){
    this.movieService.getAllMovies(this.httpParams).subscribe( data => {
        this.movies = data[0];
        this.totalMovieRecords = data[2][0].totalRecords;
        this.totalMoviePages = data[2][0].totalPages;
        this.setPagesMovie();
    })
  }

  constructParams(currentPage : number,
    size : number,
    search : string,
    genre : string,
    orderBy : string,
    orderDir : string){
    
      this.httpParams = new HttpParams()
      .set('currentPage', currentPage)
      .set('size', size)
      .set('search', search)
      .set('genre', genre)
      .set('orderBy', orderBy)
      .set('orderDir', orderDir);
  }
  setPagesMovie(){
    this.endPageMovie = Math.min(this.totalMoviePages,this.endPageMovie);

    while(this.currentPageMovie - this.startPageMovie < 3 && this.startPageMovie > 1){
      this.endPageMovie--;
      this.startPageMovie--;
    }
    while(this.endPageMovie - this.currentPageMovie < 3 && this.endPageMovie < this.totalMoviePages){
      this.endPageMovie++;
      this.startPageMovie++;
    }

    let i = 0;
    let startPage = this.startPageMovie;
    let endPage = this.endPageMovie;
    while(startPage <= endPage){
      this.pageNumbersMovie[i] = startPage;
      startPage++;
      i++;
    }
  }
  getNextPageMovie(nextPage : number){
    this.currentPageMovie = nextPage;
    this.constructParams(this.currentPageMovie, 5, this.searchVal,'', 'Rating', 'DESC');
    this.getAllMovies();
  }


  GetMovie( movie : Movie){
    this.router.navigate(['video'], { queryParams : { t : "m", v : movie.URL}});
  }

  getAllShows(){
    this.tvservice.getAllShows(this.httpParams).subscribe(data => {
      this.shows = data[0];
      console.log(this.shows);
      this.totalShowPages = data[2][0].totalPages;
      this.totalShowRecords = data[2][0].totalRecords;
      this.setPagesShow();
  });
  }

  setPagesShow(){
    this.endPageShow = Math.min(this.totalShowPages,this.endPageShow);

    while(this.currentPageShow - this.startPageShow < 3 && this.startPageShow > 1){
      this.endPageShow--;
      this.startPageShow--;
    }
    while(this.endPageShow - this.currentPageShow < 3 && this.endPageShow < this.totalShowPages){
      this.endPageShow++;
      this.startPageShow++;
    }

    let i = 0;
    let startPage = this.startPageShow;
    let endPage = this.endPageShow;
    while(startPage <= endPage){
      this.pageNumbersShow[i] = startPage;
      startPage++;
      i++;
    }
  }
  getNextPageShow(nextPage : number){
    this.currentPageShow = nextPage;
    this.constructParams(this.currentPageShow, 5, this.searchVal,'', 'Rating', 'DESC');
    this.getAllShows();
  }

  GetShow( show : Tv){
    this.router.navigate(['video'], { queryParams : { t : "s", v : show.URL}});
  }

}
