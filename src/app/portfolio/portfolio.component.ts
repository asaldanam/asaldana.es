import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})

export class PortfolioComponent implements OnInit {

  portfolio = "";
  loading:boolean = false;

  constructor(
    public _asdesing: AsdesignService
  )
  {}

  loadProjects() {
    this._asdesing.getProjects().subscribe(data => {
      this.portfolio = data;
      this.loading = true;
      // console.log(this.portfolio);
    });
  }

  ngOnInit() {
    this.loadProjects();
  }

}
