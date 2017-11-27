import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _asdesing: AsdesignService) {
  }

  ngOnInit() {
  }

}
