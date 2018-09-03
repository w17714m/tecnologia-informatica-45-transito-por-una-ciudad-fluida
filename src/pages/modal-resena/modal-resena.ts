import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Entry, File} from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-modal-resena',
  templateUrl: 'modal-resena.html',
})
export class ModalResenaPage {
   options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    targetWidth: 1000,
    targetHeight: 1000,
    quality: 30
  };

  showImage:boolean;
  stringImage:string;


  descripcion:string;
  calificacion:string;
  foto:string;
  dataRecibida:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,
              private camera: Camera,private alertCtrl:AlertController,
              private file: File) {
  }

  ionViewDidLoad() {
     this.dataRecibida = this.navParams.get('coord');
  }

  dismiss() {
    if(this.calificacion == '' || this.calificacion == undefined ){

      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Debe ingresar mínimo la calificación de acceso de este púnto. ',
        buttons: ['Aceptar']
      });
      alert.present();

      return;
    }

    let data = { descripcion: this.descripcion, calificacion:this.calificacion,dataRecibida: this.dataRecibida,imagen:this.stringImage};
    this.viewCtrl.dismiss(data);
  }

  tomarFoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      console.log(imageData);
      this.showImage = true;
      this.stringImage = `data:image/jpeg;base64,${imageData}`;

    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Se genero un error al capturar la imagen vuelva a intentar.',
        buttons: ['Aceptar']
      });
      alert.present();

       console.log('No se pudo capturar la fotografía');
    });
  }


}
