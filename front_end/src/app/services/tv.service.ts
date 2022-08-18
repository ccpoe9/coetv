import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
import { Tv } from '../models/tv.model';
@Injectable({
  providedIn: 'root'
})
export class TvService {

  searchSource : Subject<string> = new ReplaySubject<string>(1);
  search = this.searchSource.asObservable();
  
  constructor(private http : HttpClient) { }

  getAllShows(httpParams : HttpParams) : Observable<any>{
    return this.http.get<any>(config.APIROOT+config.APIURLS.SHOWS, 
      {
        params : httpParams
      });  
  }

  getShow(url : string){
    return this.http.get<Tv[]>(config.APIROOT+config.APIURLS.SHOWS+decodeURIComponent(url));
  }
  
  getShowSeason(httpParams : HttpParams) : Observable<any>{
    return this.http.get<any>(config.APIROOT+config.APIURLS.EPISODES,
      {
        params : httpParams
      });

  }

  searchAllRecords(searchVal : string){
    this.searchSource.next(searchVal);
  }
}
