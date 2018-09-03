import { NgModule } from '@angular/core';
import { MenuOpcionesComponent } from './menu-opciones';
import {IonicPageModule} from "ionic-angular";
import {LineaMenuModule} from "../linea-menu/linea-menu.module";

@NgModule({
	declarations: [
    MenuOpcionesComponent,
  ],
	imports: [
    IonicPageModule.forChild(MenuOpcionesComponent),
    LineaMenuModule
  ],
	exports: [
    MenuOpcionesComponent,
  ]
})
export class MenuOpcionesModule {}
