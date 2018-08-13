import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LoginUserProvider} from "../../providers/login-user/login-user";
import {RegisterComponent} from "../../components/register/register";
import {HomePage} from "../home/home";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  autentication = {email: '', pass: ''};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginProvider: LoginUserProvider,
              private alertCtrl: AlertController,
              public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.loginProvider.user.subscribe((data) => {
      console.log('resultado de suscripcion', data);
    })
  }

  loginApp() {
    let isMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.autentication.email);


    if (this.autentication.email == '' || this.autentication.pass == '' || !isMail) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Usuario o contraseña inválida.',
        buttons: ['Aceptar']
      });
      alert.present();
    } else {

      this.loginProvider.loginUser(this.autentication.email, this.autentication.pass).then((data) => {
        console.log('RESULTADO', data);
        this.navCtrl.push(HomePage);
      }).catch((e) => {
        console.log(e);
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Usuario o contraseña inválida.',
          buttons: ['Aceptar']
        });
        alert.present();
      });
    }
  }

  loginFacebook() {
    this.loginProvider.loginFacebook().then(data => {
      console.log(data);
    });
  }

  loginGoogle() {
    this.loginProvider.loginGoogle().then(data => {
      if(data!=null)
      this.navCtrl.push(HomePage);
    });
  }

  loginTwitter() {
    this.loginProvider.loginTwitter().then(data => {
      console.log(data);
    });
  }

  registro() {
    let profileModal = this.modalCtrl.create(RegisterComponent);
    profileModal.present();

  }
}