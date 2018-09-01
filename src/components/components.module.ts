import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior';
import { LineaMenuComponent } from './linea-menu/linea-menu';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones';
import { MenuInferiorResenaComponent } from './menu-inferior-resena/menu-inferior-resena';

@NgModule({
	declarations: [RegisterComponent,
    MenuInferiorComponent,
    LineaMenuComponent,
    MenuOpcionesComponent,
    MenuInferiorResenaComponent],
	imports: [
  ],
	exports: [RegisterComponent,
    MenuInferiorComponent,
    LineaMenuComponent,
    MenuOpcionesComponent,
    MenuInferiorResenaComponent]
})
export class ComponentsModule {}
