import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit {

  loading:any = false

  constructor(
    public _firebase: FirebaseService
  )
  {
    this._firebase.getCurriculum().subscribe(data => {
      this.loading = true;
    })
  }

  ngOnInit() {
  }

}
