import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { HomePage } from './home';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {MenuOpcionesModule} from "../../components/menu-opciones/menu-opciones.module";


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule,
    MenuOpcionesModule

  ],
})
export class HomePageModule {}
