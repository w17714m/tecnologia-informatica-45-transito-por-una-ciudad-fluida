import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams,ModalController} from 'ionic-angular';
import {markerIcons, styleMap} from "../../providers/servicios/MapVariables";
import {Almacenamiento} from "../../providers/servicios/almacenamiento";
import {ModalResenaPage} from "../modal-resena/modal-resena";
import {OperacionesDb} from "../../providers/servicios/operacionesDb";


@IonicPage()
@Component({
  selector: 'page-explorar-resenas',
  templateUrl: 'explorar-resenas.html',
  providers:[Almacenamiento,OperacionesDb],
  entryComponents:[ModalResenaPage]
})
export class ExplorarResenasPage {
  style=styleMap;
  marker = markerIcons;
  points:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,
              private storage: Almacenamiento, private modal: ModalController,
              private db:OperacionesDb
              ) {
          this.points =  db.item;
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
        this.db.addItem(data);
    });
    modal.present();
  }
}
