import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http : HttpClient) { }

  getAllShows(httpParams : HttpParams) : Observable<any>{
    return this.http.get<any>(config.APIROOT+config.APIURLS.SHOWS, 
      {
        params : httpParams
      });  
  }
}
