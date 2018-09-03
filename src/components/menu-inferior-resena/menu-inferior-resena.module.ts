import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {MenuInferiorComponent} from "../menu-inferior/menu-inferior";
import {LineaMenuModule} from "../linea-menu/linea-menu.module";
import {MenuInferiorResenaComponent} from "./menu-inferior-resena";


@NgModule({
  declarations: [
    MenuInferiorResenaComponent,
  ],
  imports: [
    IonicPageModule.forChild(MenuInferiorResenaComponent),
    LineaMenuModule
  ],
  exports: [
    MenuInferiorResenaComponent,
  ]
})
export class MenuInferiorResenaModule {}
