import {Component, Input} from '@angular/core';
import {IonicPage, MenuController, NavController} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'menu-opciones',
  templateUrl: 'menu-opciones.html',
})
export class MenuOpcionesComponent {

  @Input()
  public variableContenedor:any;


  text: string;

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {
    this.menuCtrl._unregister(this.menuCtrl.getMenus()[0]);

  }

  goPage(page: string) {
    if(this.navCtrl.getActive().name == page){
      return;
    }

    this.navCtrl.push(page);

  }
}
