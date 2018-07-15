import { Component, OnInit } from '@angular/core';
import {MenuItemsService} from "../menu-items.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public menuService: MenuItemsService) { }

  title: string = 'Welcome';
  menuItems: string[] = [];
  ngOnInit() {
    this.menuService.getMenu().subscribe((items) => {
      this.menuItems = items;
    })
  }

}
