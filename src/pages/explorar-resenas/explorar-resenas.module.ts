import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarResenasPage } from './explorar-resenas';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {MenuOpcionesComponent} from "../../components/menu-opciones/menu-opciones";



@NgModule({
  declarations: [
    ExplorarResenasPage,
    MenuOpcionesComponent,
  ],
  imports: [

    IonicPageModule.forChild(ExplorarResenasPage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule,

  ],

})
export class ExplorarResenasPageModule {}
