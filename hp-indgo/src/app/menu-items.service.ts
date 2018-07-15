import { Injectable } from '@angular/core';
import {MenuItems} from "./menu-items";
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

   menuItems;
  constructor() {
   let arr = ['home', 'press-instalation', 'three', 'four'];
   this.menuItems = new MenuItems(arr);
  }

  getMenu(){
   return of(this.menuItems.items);
  }
}
