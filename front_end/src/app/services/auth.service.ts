import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatus : boolean = false;

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token', 'true');
      this.authStatus = true;
      this.router.navigate(['/landing']);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token', 'true');
      this.authStatus = true;
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }


  // sign out

  logout(){
    this.fireauth.signOut().then(()=>{
        //localStorage.removeItem('token');
        this.router.navigate(['login']);
    }, err =>{
       alert(err.message);
    })
  }

  // get auth status

  getAuthStatus(){
    return this.authStatus;
  }
}
