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

  currentPage : number = 1;
  size : number = 20;
  search : string = '';
  orderBy : string = 'id';
  orderDir : string = 'DESC';
  httpParams : HttpParams;

  sortBySelected : string = 'SORT BY LATEST';
  sortByUnselected : string = 'SORT BY POPULAR';

  totalRecords : number;
  totalPages : number;

  startPage : number = 1;
  endPage : number = 6;
  pageNumbers : number[] = [0,0,0,0,0,0];

  ngOnInit(): void {
    this.constructParams(this.currentPage, this.size, this.search, this.orderBy, this.orderDir);
    this.getAllMovies();
    console.log(this.pageNumbers);
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
      this.moviesService.getAllMovies(this.httpParams).subscribe(data => {
        this.movies = data;
        this.getAllRecords();
    });
  }
//8 - total pages
  getAllRecords(){
    this.moviesService.getAllRecords().subscribe(data => {
        this.totalPages = data.totalPages;
        this.totalRecords = data.totalRecords;
        this.setPages();
    })
  }

  getNextPage(nextPage : number){
    this.currentPage = nextPage;
    this.constructParams(this.currentPage, this.size, this.search, this.orderBy, this.orderDir);
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



}
