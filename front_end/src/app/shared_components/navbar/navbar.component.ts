import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, ReplaySubject, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { ConnectionConfig as config } from 'src/config/config';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$ = this.fireAuth.user;
  searchVal : string = '';
  searchSource : Subject<string> = new ReplaySubject<string>();
  search = this.searchSource.asObservable();
  adminUID : string;
  coadminUID : String;
  currentPage : string;

  constructor(private authService : AuthService, private readonly fireAuth : AngularFireAuth, 
    private movieService : MoviesService, private router : Router, private tvservice : TvService) { 

    this.router.events
          .subscribe(
            (event: any) => {
              if(event instanceof NavigationStart) {
                this.currentPage = event.url;
              }
            });

    }

  ngOnInit(): void {
    this.adminUID = config.ADMINUID;
    this.coadminUID = config.COADMINUID;
  }

  signOut(){
    this.authService.logout();
  }

  searchAction(){
    this.router.navigate(['/']).then(() => {
      this.router.navigate(['search'], { queryParams : { s : this.searchVal}});
    });
  }

}
