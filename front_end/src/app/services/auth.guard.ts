import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private subscription: Subscription;
  private isAuthenticated: boolean;
  constructor(private authService : AuthService, private router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.subscription = this.authService.authStatus.subscribe( status => this.isAuthenticated = status);
      if(!this.isAuthenticated){
        this.router.navigate(['login']);
      }
    return this.isAuthenticated;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
