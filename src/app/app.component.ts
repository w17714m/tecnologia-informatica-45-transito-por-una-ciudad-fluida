import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SplashPage} from "../pages/splash/splash";
import {ServiciosProvider} from '../providers/servicios/servicios';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SplashPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth: ServiciosProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.Session.subscribe(session=>{
  
        if(session){
            this.rootPage = 'BienvenidoPage';
        }else{
            this.rootPage = 'SplashPage';
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
