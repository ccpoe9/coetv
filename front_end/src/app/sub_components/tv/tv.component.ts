import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tv } from 'src/app/models/tv.model';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  constructor() { }
  searchSubscription : Subscription;
  shows : Tv[];

  currentPage : number = 1;
  size : number = 20;
  search : string = '';
  genre : string = '';
  orderBy : string = 'id';
  orderDir : string = 'DESC';
  httpParams : HttpParams;
  
  sortBySelected : string = 'SORT BY LATEST';
  sortByUnselected : string = 'SORT BY POPULAR';

  ngOnInit(): void {
  }

}
