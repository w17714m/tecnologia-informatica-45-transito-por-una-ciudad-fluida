import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {MenuInferiorComponent} from "../../components/menu-inferior/menu-inferior";
import {LineaMenuComponent} from "../../components/linea-menu/linea-menu";
import {MenuOpcionesComponent} from "../../components/menu-opciones/menu-opciones";

@NgModule({
  declarations: [
    PrincipalPage,
    MenuInferiorComponent,
    LineaMenuComponent,
    MenuOpcionesComponent
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule
  ],
})
export class PrincipalPageModule {}
