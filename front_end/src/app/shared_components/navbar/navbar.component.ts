import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated : boolean;
  authSubscription: Subscription;
  currentUser : string;
  userSubscription : Subscription;
  constructor(private authService : AuthService) { }


  ngOnInit(): void {
    this.authSubscription = this.authService.authStatus.subscribe(status => this.isAuthenticated = status);
    this.userSubscription = this.authService.currentUser.subscribe( user => this.currentUser = user);
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  signOut(){
    this.authService.logout();
  }

}
