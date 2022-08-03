import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser : string;
  userSubscription : Subscription;

  constructor(private authService : AuthService, private fireAuth : AngularFireAuth) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.currentUser.subscribe( user => this.currentUser = user);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  signOut(){
    this.authService.logout();
  }

}
