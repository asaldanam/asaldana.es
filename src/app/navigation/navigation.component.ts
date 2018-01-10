import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  menu:boolean = false;
  menu_color:boolean = false;

  constructor(private _router: Router) {
    // this.cosa = _router
  }

  showMenu() {
    this.menu = !this.menu;
  }

  hideMenuResponsive() {
    if (innerWidth <= 1024) {
      this.menu = !this.menu;
    }
    if (window.location.pathname === '/home'){
      this.menu_color = true
      console.log('el menú es...' + this.menu_color)
    }
    // return;
  }

  ngOnInit() {
    // console.log(this.cosa.routerState.snapshot);
    // console.log(window.location.pathname)
  }

}
