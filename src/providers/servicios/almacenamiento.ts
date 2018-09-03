import {Injectable} from "@angular/core";
import {Storage} from '@ionic/storage';


export const VARIABLES = {
  USER:'user'
};


@Injectable()
export class Almacenamiento {


  constructor(private storage: Storage){}


  set(key:string, value:any){
    localStorage[key]=value;
  }

  get(key){
    return JSON.parse(localStorage[key]) ;
  }


}
