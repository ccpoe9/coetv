import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ɵsetCurrentInjector } from '@angular/core';
import { switchMap } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
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
  httpDeleteParams : HttpParams;

  movies : Movie[];
  totalMovieRecords : number;
  totalMoviePages : number;
  shows : Tv[];
  totalShowRecords : number;
  totalShowPages : number;
  genres : Genre[];
  isChecked : boolean[];

  startPage : number = 1;
  endPage : number = 6;
  pageNumbers : number[] = [0,0,0,0,0,0];
  currentPage : number = 1;

  totalSeasons : number;
  episodes : Episode[];
  seasons : number[];
  editCurrentSeason : number = 1;

  postItemName : string = '';
  postItemDesc : string = '';
  postItemGenre : string = '';
  postItemRating : number = 0;
  postItemThumbnail : string = '';
  postItemVideo : string = '';

  putItemId : string;
  putItemName : string;
  putItemDesc : string;
  putItemGenres : string[];
  putItemRating : number;
  putItemThumbnail : string;
  putItemVideo : string;

  postItemEpisodeName : string;
  postItemEpisodeDesc : string;
  postItemEpisodeSeason : number;
  postItemEpisodeVideo : string;

  putItemEpisodeName : string;
  putItemEpisodeDesc : string;
  putItemEpisodeVideo : string;

  deleteItemName : string;
  deleteItemId : number;

  errorMessage : string;

  addEpisodeMode : boolean = false;
  editEpisodeMode : boolean = false;
  editEpisode : number;

  @ViewChild('closeButton') closeButton: ElementRef;
  @ViewChild('discardButton') discardButton: ElementRef;
  @ViewChild('cancelButton') cancelButton: ElementRef;
  @ViewChild('addForm') addForm: ElementRef;
  ngOnInit(): void {
    this.constructParams(1,20,'','','id','DESC');
    this.getAllMovies();
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
      this.totalMoviePages = data[2][0].totalPages
      this.totalMovieRecords = data[2][0].totalRecords;
      this.setPages(this.totalMoviePages);
  });
  }

  getAllShows(){
    this.tvservice.getAllShows(this.httpParams).subscribe(data => {
      this.shows = data[0];
      this.totalShowPages = data[2][0].totalPages
      console.log(this.totalShowPages);;
      this.totalShowRecords = data[2][0].totalRecords;
      this.setPages(this.totalShowPages);
  });
  }
  getAllGenres(){
    this.moviesService.getGenres().subscribe( data => {
      this.genres = data;
      this.isChecked = new Array(this.genres.length).fill(false);
    })
  }

  changeContentType( type : string){
    this.resetPages();
    this.currentContentType = type;
    this.constructParams(this.currentPage,20,'','','id','DESC');
    if(type == this.ContentTypes[1]){
      this.getAllShows();
    }
    else{
      this.getAllMovies();
    }  
  }

  resetPages(){
    this.pageNumbers = [0,0,0,0,0,0];
    this.currentPage = 1;
    this.startPage = 1;
    this.endPage = 6;
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
    this.moviesService.createMovie(postItem).pipe( switchMap( data => {
      this.resetPages();
      this.constructParams(1,20,'','','id','DESC');
      return this.moviesService.getAllMovies(this.httpParams);
    })).subscribe(data => {
      this.movies = data[0];
      this.totalMoviePages = data[2][0].totalPages;
      this.totalMovieRecords = data[2][0].totalRecords;
      this.setPages(this.totalMoviePages);
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
    this.tvservice.createShow(postItem).pipe( switchMap ( data => {
      this.resetPages();
      this.constructParams(1,20,'','','id','DESC');
      return this.tvservice.getAllShows(this.httpParams);
    })).subscribe(data => {
      this.shows = data[0];
      this.totalShowPages = data[2][0].totalPages;
      this.totalShowRecords = data[2][0].totalRecords;
      this.setPages(this.totalShowPages)
      this.resetPostItems();
      this.closeDialog();
    },err => this.errorMessage = err.statusText);
  }

  onAddEpisode(){
    this.addEpisodeMode = true;
    this.editEpisodeMode = false;
    this.postItemEpisodeName = '';
    this.postItemEpisodeSeason = 1;
    this.postItemEpisodeVideo = '';
    this.postItemEpisodeDesc = '';
  }
  cancelPostEpisode(){
    this.addEpisodeMode = false;
    this.postItemEpisodeName = '';
    this.postItemEpisodeSeason = 1;
    this.postItemEpisodeVideo = '';
    this.postItemEpisodeDesc = '';
  }
  PostEpisode(){
    let postItem = {
      "Name" : this.postItemEpisodeName,
      "showName" : this.putItemName,
      "season" : this.postItemEpisodeSeason,
      "Video" : this.postItemEpisodeVideo,
      "Desc" : this.postItemEpisodeDesc
    }

    this.tvservice.createEpisode(postItem).pipe( switchMap( data => {
      this.httpParams = new HttpParams()
      .set('showName',this.putItemName)
      .set('season',this.editCurrentSeason);
      return this.tvservice.getShowSeason(this.httpParams);
    })).subscribe( data => {
      this.episodes = data[0];
      this.addEpisodeMode = false;
      this.errorMessage = '';
      alert('New Episode Created.');
    },err => this.errorMessage = err.statusText);
  }

  setPostGenre(){
    this.postItemGenre = '';
    for(let i = 0; i<this.genres.length; i++){
      if(this.isChecked[i]){
        this.postItemGenre += this.genres[i].Name + ", ";
      }
    }
    this.postItemGenre = this.postItemGenre.slice(0, -2);
  }

  resetPostItems(){
    this.errorMessage = '';
    this.postItemName  = '';
    this.postItemDesc = '';
    this.postItemGenre = '';
    this.postItemRating = 0;
    this.postItemThumbnail = '';
    this.postItemVideo = '';
    this.isChecked = new Array(this.genres.length).fill(false);
    this.addForm.nativeElement.reset();
  }

  changeChecked( id : number){
    this.isChecked[(id-1)] = !this.isChecked[(id-1)];
  }

  setPutItems(item : any){
    if(this.currentContentType=='TV SHOW'){
      this.getShow(item.URL);
    }
    this.errorMessage = '';
    this.putItemId = item.id;
    this.putItemName = item.Name;
    this.putItemDesc = item.Desc;
    this.isChecked = new Array(this.genres.length).fill(false);
    this.putItemGenres = item.Genre.replace(/\s/g, '').split(',');
    this.putItemRating = item.Rating;
    this.putItemThumbnail = item.Thumbnail;
    this.putItemVideo = item.Video;
    this.setEditChecked();
  }
  getShow(url : string){
    this.tvservice.getShow(`/video?t=s&v=${url}`).pipe( switchMap( data => {
      this.totalSeasons = data[2][0].totalSeasons;
      this.seasons = Array.from({length: this.totalSeasons}, (_, i) => i + 1);
      this.editCurrentSeason = 1;
      this.httpParams = new HttpParams()
      .set('showName',this.putItemName)
      .set('season',this.editCurrentSeason);
      return this.tvservice.getShowSeason(this.httpParams);
    })).subscribe( data => {
      this.episodes = data[0];
    });
  }

  changeSeason(season : number){
    this.editCurrentSeason = season;
    this.httpParams = new HttpParams()
      .set('showName',this.putItemName)
      .set('season',season);
      this.tvservice.getShowSeason(this.httpParams).subscribe( data => {
        this.episodes = data[0];
      });
  }

  setEditChecked(){
    for(let i=0; i<this.genres.length; i++){
      if(this.putItemGenres.includes(this.genres[i].Name)){
        this.isChecked[i] = true;
      }
    }
  }
  getPutGenre(){
    let genres = '';
    for(let i = 0; i<this.genres.length; i++){
      if(this.isChecked[i]){
        genres += this.genres[i].Name + ", ";
      }
    }
    genres = genres.slice(0, -2);
    return genres;
  }
  putItem(type : string){
    if(type == 'MOVIE') this.PutMovie();
    else if(type == 'TV SHOW') this.PutShow();
  }

  PutMovie(){
    let putItem = {
      "id" : this.putItemId,
      "Name" : this.putItemName,
      "Desc" : this.putItemDesc,
      "Genre" : this.getPutGenre(),
      "Rating" : this.putItemRating,
      "Thumbnail" : this.putItemThumbnail,
      "Video" : this.putItemVideo
    }

    this.moviesService.updateMovie(putItem).pipe( switchMap( data => {
      this.resetPages();
      this.constructParams(1,20,'','','id','DESC');
      return this.moviesService.getAllMovies(this.httpParams);
    })).subscribe(data => {
      this.movies = data[0];
      this.totalMoviePages = data[2][0].totalPages;
      this.totalMovieRecords = data[2][0].totalRecords;
      this.setPages(this.totalMoviePages);
      this.closeDialog();
    },err => this.errorMessage = err.statusText);
  }

  PutShow(){
    let putItem = {
      "id" : this.putItemId,
      "Name" : this.putItemName,
      "Genre" : this.getPutGenre(),
      "Desc" : this.putItemDesc,
      "Thumbnail" : this.putItemThumbnail,
      "Rating" : this.putItemRating
    }

    this.tvservice.updateShow(putItem).pipe( switchMap( data => {
      this.resetPages();
      this.constructParams(1,20,'','','id','DESC');
      return this.tvservice.getAllShows(this.httpParams)
    })).subscribe(data => {
      this.shows = data[0];
      this.totalShowPages = data[2][0].totalPages;
      this.totalShowRecords = data[2][0].totalRecords;
      this.setPages(this.totalShowPages);
      this.closeDialog();
    }, err => this.errorMessage = err.statusText);
  }


  setDeleteItem(item : any){
    this.deleteItemName = item.Name;
    this.deleteItemId = item.id;

  }

  deleteItem(type : string){
    if(type == 'MOVIE') this.DeleteMovie();
    else if(type == 'TV SHOW') this.DeleteShow();
  }

  DeleteMovie(){
     this.httpDeleteParams = new HttpParams()
     .set('id', this.deleteItemId);
     this.moviesService.deleteMovie(this.httpDeleteParams).pipe( switchMap( data => {
      this.resetPages();
      this.constructParams(1,20,'','','id','DESC');
      return this.moviesService.getAllMovies(this.httpParams);
    })).subscribe(data => {
      this.movies = data[0];
      this.totalMoviePages = data[2][0].totalPages;
      this.totalMovieRecords = data[2][0].totalRecords;
      this.setPages(this.totalMoviePages);
      this.closeDialog();
    },err => console.log(err.statusText));

  }

  DeleteShow(){
    this.httpDeleteParams = new HttpParams()
    .set('id', this.deleteItemId);
    this.tvservice.deleteShow(this.httpDeleteParams).pipe( switchMap( data => {
      this.resetPages();
      this.constructParams(1,20,'','','id','DESC');
      return this.tvservice.getAllShows(this.httpParams);
    })).subscribe(data => {
      this.shows = data[0];
      this.totalShowPages = data[2][0].totalPages;
      this.totalShowRecords = data[2][0].totalRecords;
      this.setPages(this.totalShowPages);
      this.closeDialog();
    },err => console.log(err.statusText));
  }
  
  DeleteEpisode(episode : Episode){
    this.httpDeleteParams = new HttpParams()
    .set('id', episode.id);

    this.tvservice.deleteEpisode(this.httpDeleteParams).pipe( switchMap( data => {
      this.httpParams = new HttpParams()
      .set('showName',this.putItemName)
      .set('season',this.editCurrentSeason);
      return this.tvservice.getShowSeason(this.httpParams);
    })).subscribe( data => {
      this.episodes = data[0];
      this.errorMessage = '';
    },err => this.errorMessage = err.statusText);

  }

  closeDialog(){
    this.closeButton.nativeElement.click();
    this.discardButton.nativeElement.click();
    this.cancelButton.nativeElement.click();
  }

  setEdit(episode : Episode){
    this.editEpisode = episode.id;
    this.putItemEpisodeName = episode.Name;
    this.putItemEpisodeDesc = episode.Desc;
    this.putItemEpisodeVideo = episode.Video;
    this.addEpisodeMode = false;
    this.editEpisodeMode  = true;
  }

  PutEpisode(){
    let putItem = {
      "id" : this.editEpisode,
      "Name" : this.putItemEpisodeName,
      "Desc" : this.putItemEpisodeDesc,
      "Video" : this.putItemEpisodeVideo
    }

    this.tvservice.updateEpisode(putItem).pipe( switchMap( data => {
      this.httpParams = new HttpParams()
      .set('showName',this.putItemName)
      .set('season',this.editCurrentSeason);
      return this.tvservice.getShowSeason(this.httpParams);
    })).subscribe( data => {
      this.episodes = data[0];
      this.editEpisodeMode = false;
      this.errorMessage = '';
    },err => this.errorMessage = err.statusText);
  }

  getNextPage(nextPage : number){
    this.currentPage = nextPage;
    this.constructParams(this.currentPage, 20, '', '', 'id', 'DESC');
    if(this.currentContentType == this.ContentTypes[0]){
      this.getAllMovies();
    }
    else{
      this.getAllShows();
    }
  }
  
  setPages(totalPages : number){
    this.endPage = Math.min(totalPages,this.endPage);
  
    while(this.currentPage - this.startPage < 3 && this.startPage > 1){
      this.endPage--;
      this.startPage--;
    }
    while(this.endPage - this.currentPage < 3 && this.endPage < totalPages){
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
