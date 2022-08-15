import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/models/genre.model';
import { Tv } from 'src/app/models/tv.model';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  constructor(private tvservice : TvService, private movieService : MoviesService) { }
  searchSubscription : Subscription;
  shows : Tv[];

  currentPage : number = 1;
  size : number = 20;
  search : string = '';
  genre : string = '';
  orderBy : string = 'id';
  orderDir : string = 'DESC';
  httpParams : HttpParams;
  
  sortBySelected : string = 'SORT BY LATEST';
  sortByUnselected : string = 'SORT BY POPULAR';
  sortByGenre : string = 'All';

  totalRecords : number;
  totalPages : number;
  genres : Genre[];

  startPage : number = 1;
  endPage : number = 6;
  pageNumbers : number[] = [0,0,0,0,0,0];
  ngOnInit(): void {
    this.constructParams(this.currentPage, this.size, this.search, this.genre, this.orderBy, this.orderDir);
    this.getAllShows();
    this.getAllGenres();
    this.tvservice.search.subscribe( val => {
      this.searchAction(val);
      this.constructParams(this.currentPage,this.size,this.search,this.genre,this.orderBy,this.orderDir);
      this.getAllShows();
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

  getAllShows(){
    this.tvservice.getAllShows(this.httpParams).subscribe(data => {
      this.shows = data[0];
      this.totalPages = data[2][0].totalPages;
      this.totalRecords = data[2][0].totalRecords;
      this.setPages();
  });
}

getNextPage(nextPage : number){
  this.currentPage = nextPage;
  this.constructParams(this.currentPage, this.size, this.search,this.genre, this.orderBy, this.orderDir);
  this.getAllShows();
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

  if(this.sortBySelected == 'SORT BY POPULAR'){
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
  this.getAllShows();
}

searchAction(val : string){
  this.search = val;
  this.currentPage = 1;
  this.startPage = 1;
  this.endPage = 6;
  this.orderBy = 'id';
  this.genre = '';
  this.sortByGenre = 'All';
  this.sortBySelected = 'SORT BY LATEST';
  this.sortByUnselected = 'SORT BY POPULAR';
}

getAllGenres(){
  this.movieService.getGenres().subscribe( data => {
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
  this.getAllShows();
}

}
