import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Live } from '../models/live.model';
import { ConnectionConfig as config } from 'src/config/config';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private http : HttpClient) { }

  getLive(){
    return this.http.get<Live[]>(config.APIROOT+config.APIURLS.LIVE)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );  
  }

  getGuide(){
    return this.http.get<any>(config.APIROOT+config.APIURLS.GUIDE)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );  
  }

  postLive(channel : any){
    return this.http.post(config.APIROOT+config.APIURLS.LIVE, channel)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  updateLive(channel : any){
    return this.http.put(config.APIROOT+config.APIURLS.LIVE, channel)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteLive(httpDeleteParams : HttpParams){
    return this.http.delete(config.APIROOT+config.APIURLS.LIVE, {
      params : httpDeleteParams
    })
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
