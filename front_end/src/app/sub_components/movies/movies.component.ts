import { HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService : MoviesService, private router : Router) { }

  searchSubscription : Subscription;
  movies : Movie[];

  currentPage : number = 1;
  size : number = 20;
  search : string = '';
  genre : string = '';
  orderBy : string = 'id';
  orderDir : string = 'DESC';
  httpParams : HttpParams;

  sortBySelected : string = 'SORT BY : LATEST';
  sortByUnselected : string = 'SORT BY : POPULAR';
  sortByGenre : string = 'All';
  sortByDropdown : boolean = false;
  genreDropwdown : boolean = false;
  totalRecords : number;
  totalPages : number;
  genres : Genre[];

  startPage : number = 1;
  endPage : number = 6;
  pageNumbers : number[] = [0,0,0,0,0,0];

  ngOnInit(): void {
    this.constructParams(this.currentPage, this.size, this.search, this.genre, this.orderBy, this.orderDir);
    this.getAllMovies();
    this.getAllGenres();
    this.moviesService.search.subscribe( val => {
        this.searchAction(val);
        this.constructParams(this.currentPage,this.size,this.search,this.genre,this.orderBy,this.orderDir);
        this.getAllMovies();
    });
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

  getAllMovies(){
      this.moviesService.getAllMovies(this.httpParams).subscribe(data => {
        this.movies = data[0];
        this.totalPages = data[2][0].totalPages;
        this.totalRecords = data[2][0].totalRecords;
        this.setPages();
    });
  }

  getNextPage(nextPage : number){
    this.currentPage = nextPage;
    this.constructParams(this.currentPage, this.size, this.search,this.genre, this.orderBy, this.orderDir);
    this.getAllMovies();
  }

  setPages(){
    this.endPage = Math.min(this.totalPages,this.endPage);

    while(this.currentPage - this.startPage < 3 && this.startPage > 1){
      this.endPage--;
      this.startPage--;
    }
    while(this.endPage - this.currentPage < 3 && this.endPage < this.totalPages){
      this.endPage++;
      this.startPage++;
    }

    let i = 0;
    let startPage = this.startPage;
    let endPage = this.endPage;
    while(startPage <= endPage){
      this.pageNumbers[i] = startPage;
      startPage++;
      i++;
    }
  }

  changeSortBy(sortByUnselected : string){
    let temp = this.sortBySelected;
    this.sortBySelected = sortByUnselected;
    this.sortByUnselected = temp;
    if(this.sortBySelected == 'SORT BY : POPULAR'){
      this.currentPage = 1;
      this.startPage = 1;
      this.endPage = 6;
      this.orderBy = 'Rating';
      this.constructParams(this.currentPage, this.size, this.search,this.genre, this.orderBy, this.orderDir);
    }
    else{
      this.currentPage = 1;
      this.startPage = 1;
      this.endPage = 6;
      this.orderBy = 'id';
      this.constructParams(this.currentPage, this.size, this.search,this.genre, this.orderBy, this.orderDir);
    }
    this.getAllMovies();
  }

  searchAction(val : string){
    this.search = val;
    this.currentPage = 1;
    this.startPage = 1;
    this.endPage = 6;
    this.orderBy = 'id';
    this.genre = '';
    this.sortByGenre = 'All';
    this.sortBySelected = 'SORT BY : LATEST';
    this.sortByUnselected = 'SORT BY : POPULAR';
  }

  GetMovie( movie : Movie){
    this.router.navigate(['video'], { queryParams : { t : "m", v : movie.URL}});
  }

  getAllGenres(){
    this.moviesService.getGenres().subscribe( data => {
      this.genres = data;
    })
  }

  changeGenre(genre : string){
    this.sortByGenre = genre;

    this.currentPage = 1;
    this.startPage = 1;
    this.endPage = 6;

    if(this.sortByGenre == 'All'){
      this.genre = '';
    }
    else{
      this.genre = this.sortByGenre;
    }
    this.constructParams(this.currentPage,this.size,this.search,this.genre,this.orderBy,this.orderDir);
    this.getAllMovies();
  }

}
