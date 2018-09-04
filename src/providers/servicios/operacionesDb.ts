import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class OperacionesDb {
  itemsRef: AngularFireList<any>;
  public item: Observable<any>;
  constructor(db:AngularFireDatabase){
      this.itemsRef = db.list('point');
      this.item = this.itemsRef.valueChanges().pipe(
        map(changes =>
          changes.map(c =>
            {
              return (c)
            }
          )
        )
      );
  }

  addItem(obj:any){
    this.itemsRef.push(obj);
  }
  updateItem(key:string,value:any){
    this.itemsRef.update(key,value);
  }
  deleteItem(key:string){
    this.itemsRef.remove(key);
  }
}
