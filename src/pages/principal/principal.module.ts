import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { PrincipalPage } from './principal';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [
    PrincipalPage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(PrincipalPage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule
  ],
})
export class PrincipalPageModule {}
