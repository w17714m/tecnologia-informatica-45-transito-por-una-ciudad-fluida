import {Component, Input} from '@angular/core';

/**
 * Generated class for the LineaMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'linea-menu',
  templateUrl: 'linea-menu.html'
})
export class LineaMenuComponent {

  text: string;

  @Input()
  recta:boolean = false;

  constructor() {
    console.log('Hello LineaMenuComponent Component');
    this.text = 'Hello World';
  }

}
