import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
/*
  Generated class for the LoginUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginUserProvider {
  public  user: Observable<firebase.User>;
  constructor(public auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  singUpUser(email:string,password:string){
    return this.auth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }


  loginUser(email:string,password:string){
    return this.auth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  loginFacebook(){
    return this.auth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  loginGoogle(){
    return this.auth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  loginTwitter(){
    return this.auth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  private logout(){
    this.auth
      .auth
      .signOut();
  }

}
