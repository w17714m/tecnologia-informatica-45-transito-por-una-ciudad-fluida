import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {markerIcons, styleMap} from "../../providers/servicios/MapVariables";

/**
 * Generated class for the ExplorarResenasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar-resenas',
  templateUrl: 'explorar-resenas.html',
})
export class ExplorarResenasPage {
  style=styleMap;
  marker = markerIcons;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
