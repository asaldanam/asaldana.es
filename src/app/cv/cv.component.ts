import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit {

  constructor(public _asdesing: AsdesignService) {
  }

  ngOnInit() {

  }

}
