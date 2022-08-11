import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
import { Genre } from '../models/genre.model';
import { Movie } from '../models/movie.model';
import { Records } from '../models/records.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  searchSource : Subject<string> = new ReplaySubject<string>(1);
  search = this.searchSource.asObservable();

    constructor(private http : HttpClient) { }

  getAllMovies(httpParams : HttpParams) : Observable<Movie[]>{
    return this.http.get<Movie[]>(config.APIROOT+config.APIURLS.MOVIES, 
      {
        params : httpParams
      });  
  }

  getAllRecords(){
    return this.http.get<Records>(config.APIROOT+config.APIURLS.MOVIESRECORDS);
  }

  searchAllRecords(searchVal : string){
    this.searchSource.next(searchVal);
  }

  getMovie(url : string){
    return this.http.get<Movie[]>(config.APIROOT+config.APIURLS.MOVIES+decodeURIComponent(url));
  }

  getGenres(){
    return this.http.get<Genre[]>(config.APIROOT+config.APIURLS.GENRES);
  }


}
