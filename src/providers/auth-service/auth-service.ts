import { Injectable } from '@angular/core';
import {User} from "../../model/User";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthServiceProvider {
  user:User;

  constructor() {

  }

  login(validUser:User): any {
    if(validUser.email==null || validUser.password==null){
      return Observable.throw('Por favor inserte unas credenciales válidas');
    }

    return Observable.create((data)=>{
      let valid = (validUser.password === "pass" && validUser.email === "email");
      this.user = new User(validUser.email,validUser.password,'');
      data.next(valid);
      data.complete();
    });

  }

  static register(validUser:User): any {
    if(validUser.email==null || validUser.password==null){
      return Observable.throw('Por favor inserte datos válidos');
    }

    return Observable.create((data)=>{
      data.next(true);
      data.complete();
    });
  }

  getInfoUser(): void {
    this.user;
  }

  logout(): any {
    return Observable.create(observer => {
      this.user= null;
      observer.next(true);
      observer.complete();
    });
  }

}
