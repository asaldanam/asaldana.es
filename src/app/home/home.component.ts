import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  home:any = "";
  loading:boolean = false;

    constructor(
      public _asdesing: AsdesignService
    )
    {}

    loadHome() {
      this._asdesing.getHome().subscribe(data => {
        this.home = data;
        this.loading = !this.loading;
        console.log(this.home);
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



    ngOnInit() {
      this.loadHome();
      this.typedJS();
    }


}
