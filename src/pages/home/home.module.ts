import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {MenuInferiorComponent} from "../../components/menu-inferior/menu-inferior";
import {MenuOpcionesComponent} from "../../components/menu-opciones/menu-opciones";
import {LineaMenuComponent} from "../../components/linea-menu/linea-menu";

@NgModule({
  declarations: [
    HomePage,
    MenuInferiorComponent,
    MenuOpcionesComponent,
    LineaMenuComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule
  ],
})
export class LoginPageModule {}
