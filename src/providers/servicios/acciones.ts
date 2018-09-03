import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { IonicPage, NavController, NavParams,ToastController,LoadingController  } from 'ionic-angular';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class AccionesProvider {

  	private db: AngularFireDatabase;
  	public  loadCustom;

  	constructor(db: AngularFireDatabase,private afAuth :  AngularFireAuth,
  		public loadingCtrl: LoadingController) {    
  		this.db = db;
  	}
  	loading() {
  		let loader = this.loadingCtrl.create({
  			content: "Cargando",
  			duration: 3000
  		});
  		loader.present();
  	}

    show(mensaje?:string ) {
      this.loadCustom = this.loadingCtrl.create({
        content: mensaje==undefined?'Cargando..':mensaje,
      });
      this.loadCustom.present();
    }

    hide() {
      this.loadCustom.dismiss();
    }
  }
