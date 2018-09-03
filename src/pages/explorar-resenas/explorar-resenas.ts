import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams,ModalController} from 'ionic-angular';
import {markerIcons, styleMap} from "../../providers/servicios/MapVariables";
import { Storage } from '@ionic/storage';
import {Almacenamiento} from "../../providers/servicios/almacenamiento";
import {ModalResenaPage} from "../modal-resena/modal-resena";


@IonicPage()
@Component({
  selector: 'page-explorar-resenas',
  templateUrl: 'explorar-resenas.html',
  providers:[Almacenamiento],
  entryComponents:[ModalResenaPage]
})
export class ExplorarResenasPage {
  style=styleMap;
  marker = markerIcons;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,
              private storage: Almacenamiento, private modal: ModalController) {

  }

  ionViewDidLoad() {
  }

  toogleNav() {
    if(!this.menuCtrl.isOpen()){
      this.menuCtrl.open().then(()=>{console.log('open');}).catch((e)=>{
        console.log('ERROR OPEN',e);
      });
    }else{
      this.menuCtrl.close().then(()=>{console.log('close');}).catch((e)=>{
        console.log('ERROR CLOSE',e);
      });
    }
  }

  addResena($event: MouseEvent) {
    console.log('STORAGE',this.storage.get('user'));
    let modal  = this.modal.create('ModalResenaPage',{ coord: $event });
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }
}
