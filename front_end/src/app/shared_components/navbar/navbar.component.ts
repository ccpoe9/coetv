import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
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
    private movieService : MoviesService, private router : Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.logout();
  }

  searchAction(){
    this.movieService.searchAllRecords(this.searchVal);
  }

}
