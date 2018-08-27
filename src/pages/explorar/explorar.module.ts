import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ExplorarPage} from './explorar';
import {AgmCoreModule} from "@agm/core";
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {apiKeyGoogle} from "../../config/config";

@NgModule({
  declarations: [
    ExplorarPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorarPage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule
  ],
})
export class ExplorarPageModule {
}
