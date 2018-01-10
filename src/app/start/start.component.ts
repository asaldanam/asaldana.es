import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.sass']
})
export class StartComponent implements OnInit {

  home:any = "";
  loading:boolean = false;

  constructor(
    public _asdesing: AsdesignService
  ) { }

  ngOnInit() {
    this.loadHome();
    this.typedJS()
  }

  loadHome() {
    this._asdesing.getHome().subscribe(data => {
      this.home = data;
      this.loading = !this.loading;
      // console.log(this.home);
    });
  }

  typedJS() {
    let options = {
      strings: ["Web design.", "User experience.", "Videomaking.","Multimedia creating"],
      // stringsElement: document.getElementById('typing-strings'),
      typeSpeed: 50,
      backSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      loop:true
    }

    let typed = new Typed(document.getElementById('typing-element'), options);
  }

}
