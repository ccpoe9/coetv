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
  subscription: Subscription;

  constructor(private authService : AuthService) { }


  ngOnInit(): void {
    this.subscription = this.authService.authStatus.subscribe(status => this.isAuthenticated = status);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
