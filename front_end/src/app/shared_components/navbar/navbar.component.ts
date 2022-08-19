import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { MoviesComponent } from 'src/app/sub_components/movies/movies.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$ = this.fireAuth.user;
  searchVal : string = '';
  constructor(private authService : AuthService, private readonly fireAuth : AngularFireAuth, 
    private movieService : MoviesService, private router : Router, private tvservice : TvService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.logout();
  }

  searchAction(){
    if(this.router.url == '/movies'){
      this.movieService.searchAllRecords(this.searchVal);
    }
    else if(this.router.url == '/tv'){
      this.tvservice.searchAllRecords(this.searchVal);
    }
  }

}
