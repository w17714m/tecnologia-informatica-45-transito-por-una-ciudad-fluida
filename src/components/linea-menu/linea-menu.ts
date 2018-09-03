import {Component, Input} from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'linea-menu',
  templateUrl: 'linea-menu.html',
})
export class LineaMenuComponent {



  @Input()
  recta:boolean = false;

  constructor() {

  }

}
