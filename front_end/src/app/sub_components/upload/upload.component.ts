import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
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
  genres : Genre[];
  isChecked : boolean[];

  postItemName : string = '';
  postItemDesc : string = '';
  postItemGenre : string = '';
  postItemRating : number = 0;
  postItemThumbnail : string = '';
  postItemVideo : string = '';

  putItemName : string;
  putItemDesc : string;
  putItemGenres : string[];
  putItemRating : number;
  putItemThumbnail : string;
  putItemVideo : string;

  deleteItemName : string;

  errorMessage : string;

  @ViewChild('closeButton') closeButton: ElementRef;
  @ViewChild('addForm') addForm: ElementRef;

  ngOnInit(): void {
    this.constructParams(1,20,'','','id','DESC');
    this.getAllMovies();
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
  getAllGenres(){
    this.moviesService.getGenres().subscribe( data => {
      this.genres = data;
      this.isChecked = new Array(this.genres.length).fill(false);
    })
  }

  changeContentType( type : string){
    this.currentContentType = type;
  }

  postItem(type : string){
    if(type == 'MOVIE') this.PostMovie();
    else if(type == 'TV SHOW') this.PostShow();
  }

  PostMovie(){
    this.setPostGenre();
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

  PostShow(){
    this.setPostGenre();
    let postItem = {
      "Name" : this.postItemName,
      "Desc" : this.postItemDesc,
      "Genre" : this.postItemGenre,
      "Rating" : this.postItemRating,
      "Thumbnail" : this.postItemThumbnail
    }
    this.tvservice.createShow(postItem).subscribe(data => {
      this.getAllShows();
      this.resetPostItems();
      this.closeDialog();
    },err => this.errorMessage = err.statusText);
  }

  setPostGenre(){
    for(let i = 0; i<this.genres.length; i++){
      if(this.isChecked[i]){
        this.postItemGenre += this.genres[i].Name + ", ";
      }
    }
    this.postItemGenre = this.postItemGenre.slice(0, -2);
  }

  resetPostItems(){
    this.postItemName  = '';
    this.postItemDesc = '';
    this.postItemGenre = '';
    this.postItemRating = 0;
    this.postItemThumbnail = '';
    this.postItemVideo = '';
    this.isChecked = new Array(this.genres.length).fill(false);
    this.addForm.nativeElement.reset();
  }
  cancelPost(){
    this.errorMessage = '';
    this.resetPostItems();
  }

  changeChecked( id : number){
    this.isChecked[(id-1)] = !this.isChecked[(id-1)];
  }

  setPutItems(item : any){
    this.putItemName = item.Name;
    this.putItemDesc = item.Desc;
    this.isChecked = new Array(this.genres.length).fill(false);
    this.putItemGenres = item.Genre.replace(/\s/g, '').split(',');
    this.setEditChecked();
    this.putItemRating = item.Rating;
    this.putItemThumbnail = item.Thumbnail;
    this.putItemVideo = item.Video;
  }

  setEditChecked(){
    for(let i=0; i<this.genres.length; i++){
      if(this.putItemGenres.includes(this.genres[i].Name)){
        this.isChecked[i] = true;
      }
    }
  }

  setDeleteItem(item : any){
    this.deleteItemName = item.Name;
  }


  closeDialog(){
    this.closeButton.nativeElement.click();
  }

}
