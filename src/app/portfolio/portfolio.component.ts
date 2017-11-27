import { Component, OnInit } from '@angular/core';
import { AsdesignService } from '../services/asdesign.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio:any = this._asdesing.portfolio;
  prueba:any[] = ['cosa1', 'cosa2'];

  constructor(public _asdesing: AsdesignService) {
    this._asdesing.getProjects()
                  .subscribe(projects => {
                    console.log(projects);
                  });
  }

  ngOnInit() {
    // console.log(this.portfolio);
  }

}
