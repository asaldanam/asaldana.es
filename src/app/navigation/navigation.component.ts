import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  menu:boolean = true

  constructor() { }

  showMenu() {
    this.menu = !this.menu;
  }

  hideMenuResponsive() {
    if (innerWidth <= 1024) {
      this.menu = !this.menu;
    }
    return;
  }

  ngOnInit() {
  }

}
