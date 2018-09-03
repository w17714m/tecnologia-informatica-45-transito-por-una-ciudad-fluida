import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarResenasPage } from './explorar-resenas';
import {AgmCoreModule} from "@agm/core";
import {apiKeyGoogle} from "../../config/config";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {MenuOpcionesComponent} from "../../components/menu-opciones/menu-opciones";
import {MenuOpcionesModule} from "../../components/menu-opciones/menu-opciones.module";
import {MenuInferiorResenaModule} from "../../components/menu-inferior-resena/menu-inferior-resena.module";
import {ModalResenaPageModule} from "../modal-resena/modal-resena.module";
import {ModalResenaPage} from "../modal-resena/modal-resena";



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
    MenuInferiorResenaModule,
    MenuOpcionesModule,
    ModalResenaPageModule
  ],
entryComponents:[ModalResenaPage]
})
export class ExplorarResenasPageModule {}
