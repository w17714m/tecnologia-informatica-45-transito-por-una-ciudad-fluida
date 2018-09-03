import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ModalController  } from 'ionic-angular';
import {ServiciosProvider} from '../../providers/servicios/servicios';
import {AccionesProvider} from '../../providers/servicios/acciones';
import {HomePage} from '../home/home'
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-registro',
 	templateUrl: 'registro.html',
 	providers:[ServiciosProvider,AccionesProvider]
 })
 export class RegistroPage {

 	public usuario = { email : '', password : ''};

 	constructor(public navCtrl: NavController, public navParams: NavParams,private servicioDB:ServiciosProvider,public toastCtrl : ToastController,private accion:AccionesProvider,
 			public modalCtrl: ModalController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad RegistroPage');
 	}

 	crear(){
 		this.accion.loading();
 		this.servicioDB.registroUsuario(this.usuario.email,this.usuario.password)
 		.then((user) => {
 			console.log("user", user);
      // El usuario se ha creado correctamente
      setTimeout(()=>{      	
	      let toast = this.toastCtrl.create({
	      	message: 'Se ha creado con exito',
	      	duration: 1500,
	      	cssClass: "succesToast",
	      });
	      toast.present();
      	this.usuario = { email : '', password : ''};
      	//this.navCtrl.push('HomePage');
		 		let profileModal = this.modalCtrl.create('BienvenidoPage');
		 		profileModal.present();
      },3000);
    })
 		.catch((err)=>{
 			console.log("err", err);
 			let toast = this.toastCtrl.create({
 				message: 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.',
 				showCloseButton: true,
 				closeButtonText: 'Aceptar',
 				cssClass: "errorToast",
 			});
 			toast.present();
 		});
 	}	
 }
