import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Tv } from 'src/app/models/tv.model';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private moviesService : MoviesService, private tvservice : TvService) { }

  ContentTypes : string[] = ['MOVIE', 'TV SHOW'];
  currentContentType : string = this.ContentTypes[0];
  httpParams : HttpParams;

  movies : Movie[];
  totalMovieRecords : number;
  totalMoviePages : number;
  shows : Tv[];
  totalShowRecords : number;
  totalShowPages : number;
 
  postItemName : string = '';
  postItemDesc : string = '';
  postItemGenre : string = "Genre1";
  postItemRating : number = 0;
  postItemThumbnail : string = '';
  postItemVideo : string = '';

  errorMessage : string;

  @ViewChild('closeButton') closeButton: ElementRef;

  ngOnInit(): void {
    this.constructParams(1,20,'','','id','DESC');
    this.getAllMovies();
    this.getAllShows();
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
      this.totalMoviePages = data[2][0].totalPages;
      this.totalMovieRecords = data[2][0].totalRecords;
      
  });
  }

  getAllShows(){
    this.tvservice.getAllShows(this.httpParams).subscribe(data => {
      this.shows = data[0];
      this.totalShowPages = data[2][0].totalPages;
      this.totalShowRecords = data[2][0].totalRecords;
  });
  }

  changeContentType( type : string){
    this.currentContentType = type;
  }

  PostMovie(){
    //console.log(this.postItemName, this.postItemDesc, this.postItemGenre, this.postItemRating, this.postItemThumbnail, this.postItemVideo);
    let postItem = {
      "Name" : this.postItemName,
      "Desc" : this.postItemDesc,
      "Genre" : this.postItemGenre,
      "Rating" : this.postItemRating,
      "Thumbnail" : this.postItemThumbnail,
      "Video" : this.postItemVideo
    }
    this.moviesService.createMovie(postItem).subscribe(data => {
      this.getAllMovies();
      this.resetPostItems();
      this.closeDialog();
    },err => this.errorMessage = err.statusText);
  }

  resetPostItems(){
    this.postItemName  = '';
    this.postItemDesc = '';
    this.postItemGenre = 'Genre1';
    this.postItemRating = 0;
    this.postItemThumbnail = '';
    this.postItemVideo = '';
  }

  closeDialog(){
    this.closeButton.nativeElement.click();
  }

  cancelPost(){
    this.errorMessage = '';
    this.resetPostItems();
  }

}
