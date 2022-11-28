import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, Subscription, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { RouterService } from './router.service';
import { ConnectionConfig as config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService : AuthService, private router : Router, private fireAuth : AngularFireAuth, private routerService : RouterService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.fireAuth.user.pipe(
        tap(user => {
          if (!user) {
            this.router.navigate([ 'login' ]);
          }
        }),
        map(user => !!user )
      );
  }
}
