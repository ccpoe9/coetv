import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  currentPage : string = 'landing';
  search : string;
  isSearched : boolean;
  constructor(private authService : AuthService, private readonly fireAuth : AngularFireAuth, 
    private movieService : MoviesService) { }

  ngOnInit(): void {

  }

  signOut(){
    this.authService.logout();
  }

  setCurrentPage( currentPage : string){
    this.currentPage = currentPage;
  }

  searchPage(){
    if(this.currentPage == 'movies'){
      this.movieService.setSearch(this.search);
    }
  }
}
