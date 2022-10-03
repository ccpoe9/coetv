import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  getSource(httpParams : HttpParams) : Observable<any>{
    return this.http.get<string>(config.APIROOT+config.APIURLS.VIDEO, 
      {
        params : httpParams
      }).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      );  
  }
}
