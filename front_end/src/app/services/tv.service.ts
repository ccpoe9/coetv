import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
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

  searchAllRecords(searchVal : string){
    this.searchSource.next(searchVal);
  }
}
