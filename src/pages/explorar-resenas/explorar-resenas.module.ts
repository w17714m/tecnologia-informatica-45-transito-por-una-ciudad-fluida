import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarResenasPage } from './explorar-resenas';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {ComponenteModule} from "../../components/componente.module";


@NgModule({
  declarations: [
    ExplorarResenasPage,
  ],
  imports: [

    IonicPageModule.forChild(ExplorarResenasPage),
    AgmCoreModule.forRoot({
      apiKey: apiKeyGoogle
    }),
    AgmSnazzyInfoWindowModule,
    ComponenteModule
  ],
})
export class ExplorarResenasPageModule {}
