import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";


/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-splash',
 	templateUrl: 'splash.html',
 })
 export class SplashPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SplashPage');
 	}

 	login(caso){
 		switch (caso) {
 			case "email":
  			// code...
  			this.navCtrl.push(LoginPage);
  			break; 
  		case "facebook":
  			// code...
  			break;
  		}
  	}
  }
