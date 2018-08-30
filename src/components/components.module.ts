import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior';
import { LineaMenuComponent } from './linea-menu/linea-menu';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones';
@NgModule({
	declarations: [RegisterComponent,
    MenuInferiorComponent,
    LineaMenuComponent,
    MenuOpcionesComponent],
	imports: [],
	exports: [RegisterComponent,
    MenuInferiorComponent,
    LineaMenuComponent,
    MenuOpcionesComponent]
})
export class ComponentsModule {}
