import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {markerIcons, styleMap} from "../../providers/servicios/MapVariables";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  style=styleMap;
  marker = markerIcons;

  constructor(public navCtrl: NavController) {

  }

  irLogin(){
    this.navCtrl.push(LoginPage);
  }
}
