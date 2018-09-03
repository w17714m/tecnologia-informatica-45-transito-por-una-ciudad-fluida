import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides  } from 'ionic-angular';

/**
 * Generated class for the BienvenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-bienvenido',
 	templateUrl: 'bienvenido.html',
 })
 export class BienvenidoPage {
 	@ViewChild(Slides) slides: Slides;

 	public slide = {
 		img :'assets/imgs/slide1.png',
 		img2 :'assets/imgs/explorar.png',
 		logo:'assets/icon/mvg.png',
 	}
 	public textSlide1 = 'En esta aplicación pordras compartir tus experiencias';
 	public textSlide2 = 'Puedes escribir tus reseñas para ser vistas y por otras personas.';

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad BienvenidoPage');
 	}
 	nextSlide() {
 		console.log(this.slides);
 		this.slides.slideTo(2, 500);
 	}
 }
