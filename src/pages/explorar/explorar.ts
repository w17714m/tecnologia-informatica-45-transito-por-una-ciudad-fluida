import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {styleMap} from "../../model/MapVariables";

/**
 * Generated class for the ExplorarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html',
})
export class ExplorarPage {

  style=styleMap;

  marker = {red:{
        url: './assets/svgs/red.svg',
        scaledSize: {
          width: 50,
          height: 50
        }
      }
    ,orange:{
        url: './assets/svgs/orange.svg',
        scaledSize: {
          width: 50,
          height: 50
        }
      }
    ,green:{
      url: './assets/svgs/green.svg',
      scaledSize: {
        width: 50,
        height: 50
      }
    }};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorarPage');
  }

}
