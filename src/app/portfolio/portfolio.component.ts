import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  portfolio = "";

  constructor(
    public _asdesing: AsdesignService
  )
  {}

  loadProjects() {
    this._asdesing.getProjects().subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
    });
  }

  ngOnInit() {
    this.loadProjects();
  }

}
