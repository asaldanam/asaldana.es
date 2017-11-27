import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  quote = {
    text: "Un gran poder conlleva una gran responsabilidad",
    author: "Yoda"
};

}
