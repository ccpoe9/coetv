import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }


  //login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      this.fireauth.setPersistence('local');
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
      this.fireauth.setPersistence('local');
      this.router.navigate(['/landing']);
      //this.sendEmailForVerification(res.user);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  sendEmailForVerification(user : any){
    user.sendEmailForVerification().then((res : any) =>{
      alert('Email Sent');
    }, (err : any) =>{
      alert('Email Not Sent!');
    })
  }


  // sign out

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('user');
        this.router.navigate(['login']);
    }, err =>{
       alert(err.message);
    })
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
