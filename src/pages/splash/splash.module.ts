import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashPage } from './splash';
import { LoginPageModule } from "../login/login.module";

@NgModule({
  declarations: [
    SplashPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashPage),
    LoginPageModule
  ],
})
export class SplashPageModule {}
