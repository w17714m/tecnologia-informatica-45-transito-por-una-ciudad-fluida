import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginUserProvider } from '../providers/login-user/login-user';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {config} from "../config/config";

import {SplashPageModule} from "../pages/splash/splash.module";
import {ServiciosProvider} from "../providers/servicios/servicios";
import {IonicStorageModule} from "@ionic/storage";

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp,{
    menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
    }
    }),
    IonicStorageModule.forRoot(),
    SplashPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginUserProvider,
    ServiciosProvider,
    Camera,
    File
  ]
})
export class AppModule {}
