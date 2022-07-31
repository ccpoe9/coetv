import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getAllMovies(httpParams : HttpParams) : Observable<Movie[]>{
    return this.http.get<Movie[]>(config.APIROOT+config.APIURLS.MOVIES, 
      {
        params : httpParams
      });  
  }

}
