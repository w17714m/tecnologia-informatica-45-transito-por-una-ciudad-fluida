import { Component } from '@angular/core';
import {LoginUserProvider} from "../../providers/login-user/login-user";
import {AlertController,  ViewController} from "ionic-angular";

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html',
  styleUrls:['register.scss']
})
export class RegisterComponent {
  public user={email:'',pass:''};

  constructor(
    public loginProvider:LoginUserProvider,
    private alertCtrl: AlertController,
    public viewCtrl: ViewController
    ) {

  }



  registrarUsuario(){

    let isMail =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);


    if(this.user.email=='' || this.user.pass=='' || !isMail){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Por favor ingreese un usuario y contraseña válidos.',
        buttons: ['Aceptar']
      });
      alert.present();
      return;
    }


    this.loginProvider.singUpUser(this.user.email,this.user.pass).then((data)=>{
      if(data!=null){
        let alert = this.alertCtrl.create({
          title: 'Felicidades',
          subTitle: 'Su usuario a sido creado con éxito.',
          buttons: ['Aceptar']
        });
        alert.present().then(()=>this.ocultar());
      }
    });
  }

  ocultar(){
    this.viewCtrl.dismiss();
  }


  cancelar() {
    this.viewCtrl.dismiss();
  }
}
