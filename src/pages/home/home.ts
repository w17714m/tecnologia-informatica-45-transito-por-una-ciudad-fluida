import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irLogin(){
    this.navCtrl.push(LoginPage);
  }
}
