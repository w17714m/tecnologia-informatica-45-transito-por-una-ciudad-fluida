import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {LineaMenuComponent} from "./linea-menu";

@NgModule({
  declarations: [
    LineaMenuComponent,
  ],
  imports: [
    IonicPageModule.forChild(LineaMenuComponent),
  ],
  exports: [
    LineaMenuComponent,
  ]
})
export class LineaMenuModule {}
