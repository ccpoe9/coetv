import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusSource = new BehaviorSubject(false);
  authStatus = this.authStatusSource.asObservable();

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      //localStorage.setItem('token', 'true');
      this.authStatusSource.next(true);
      this.router.navigate(['/landing']);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registration Successful');
      this.authStatusSource.next(true);
      this.router.navigate(['/landing']);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }


  // sign out

  logout(){
    this.fireauth.signOut().then(()=>{
        this.router.navigate(['login']);
    }, err =>{
       alert(err.message);
    })
  }

  // get auth status

  setAuthStatus(newAuthStatus : boolean){
    this.authStatusSource.next(newAuthStatus);
  }
}
