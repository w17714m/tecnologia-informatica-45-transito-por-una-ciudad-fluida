import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {markerIcons, styleMap} from "../../providers/servicios/MapVariables";
import {ServiciosProvider} from "../../providers/servicios/servicios";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ServiciosProvider]
})
export class HomePage {

  style=styleMap;
  marker = markerIcons;

  constructor(public navCtrl: NavController, private service: ServiciosProvider) {

  }

  irLogin(){
    this.navCtrl.push(LoginPage);
  }


  logout(){
    this.service.logoutUser();
  }
}
