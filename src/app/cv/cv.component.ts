import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(public _asdesing: AsdesignService) {
  }

  ngOnInit() {

  }

}
