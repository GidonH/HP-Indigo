import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = 'HP Indigo';
  desc:string = 'Service Portal';
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    document.body.className == '' ? document.body.className = 'in' : document.body.className = '';
  }
}
