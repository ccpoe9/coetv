import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
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

  constructor(private tvservice : TvService, private movieService : MoviesService, private router : Router) { }
  shows : Tv[];
  carouselShows : Tv[];

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
  this.getAllShows();
}

getAllGenres(){
  this.movieService.getGenres().pipe(switchMap( data => {
    this.genres = data;
    this.constructParams(1,3,'','','Rating','DESC');
    return this.tvservice.getAllShows(this.httpParams);
  }))
  .subscribe( data => {
    this.carouselShows = data[0];
    this.setCarousel();
    
  })
}
setCarousel(){
  if(this.carouselShows.length > 0 && this.carouselShows.length < 3){
    let i = 0;
    let len = this.carouselShows.length;
    let caroIndex = 0;
    while(i < 3){
      this.carouselShows[i] = this.carouselShows[caroIndex];
      caroIndex++;
      i++;
      if(caroIndex == len) caroIndex = 0;
    }
  }
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

GetShow( show : Tv){
  this.router.navigate(['video'], { queryParams : { t : "s", v : show.URL}});
}

generateRandomInteger(min : number , max : number) {
  return Math.floor(min + Math.random()*(max - min + 1));
}

}
