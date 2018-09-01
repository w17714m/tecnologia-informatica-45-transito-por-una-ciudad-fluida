import {Component, Input} from '@angular/core';

/**
 * Generated class for the MenuOpcionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */


@Component({
  selector: 'menu-opciones',
  templateUrl: 'menu-opciones.html'
})
export class MenuOpcionesComponent {

  @Input()
  public variableContenedor:any;


  text: string;

  constructor() {

  }

}
