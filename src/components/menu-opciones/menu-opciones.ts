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
  variableContenedor:any;


  text: string;

  constructor() {
    console.log('Hello MenuOpcionesComponent Component');
    this.text = 'Hello World';
  }

}
