import { HttpClient } from '@angular/common/http';
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
}
