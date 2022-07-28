import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusSource = new BehaviorSubject(false);
  authStatus = this.authStatusSource.asObservable();
  private currentUserSource = new BehaviorSubject('');
  currentUser = this.currentUserSource.asObservable();
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      //localStorage.setItem('token', 'true');
      this.authStatusSource.next(true);
      this.currentUserSource.next(email);
      this.router.navigate(['/landing']);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( res =>{
      alert('Registration Successful');
      this.authStatusSource.next(true);
      this.currentUserSource.next(email);
      this.router.navigate(['/landing']);
      this.sendEmailForVerification(res.user);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  sendEmailForVerification(user : any){
    user.sendEmailForVerification().then((res : any) =>{
      alert('Email Sent');
    }, (err : any) =>{
      alert('Something went wrong');
    })
  }


  // sign out

  logout(){
    this.fireauth.signOut().then(()=>{
      this.authStatusSource.next(false);
      this.currentUserSource.next('');
        this.router.navigate(['login']);

    }, err =>{
       alert(err.message);
    })
  }

  // set auth status

  setAuthStatus(newAuthStatus : boolean){
    this.authStatusSource.next(newAuthStatus);
  }

  //forgot password

  forgotPassword(email : string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      alert('Email Sent');
    }, err =>{
      alert(err.message);
    })
  }
}
