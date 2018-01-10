import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AsdesignService {
  [x: string]: any;

  //behance data
  behanceURL:string = "https://api.behance.net/v2";
  behanceData:string = "users";
  behanceUser:string = "asaldana";
  behanceProjects:string = "projects";
  behanceWorks:string = "work_experience";
  behanceClientID:string = "9P9QYEfzOkR7xVZAMfUdlic1UCjOInlO";

  //firebase data
  firebaseURL:string = "https://asm-design.firebaseio.com"

  curriculum:any;

  constructor(
    private jsonp: Jsonp,
    private http: HttpClient
  ) {
    // console.log('asdesing service works');

  }

  getProjects() {
    let apiURL = this.behanceURL + '/' + this.behanceData + '/' + this.behanceUser + '/' + this.behanceProjects + '?client_id=' + this.behanceClientID + '&callback=JSONP_CALLBACK';
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Authorization, Lang'
    })
    return this.jsonp.get(apiURL).map( (resp:any) => resp.json().projects )
  }

  getWorks() {
    let apiURL = 'https://api.behance.net/v2/users/asaldanam2a11/work_experience?client_id=9P9QYEfzOkR7xVZAMfUdlic1UCjOInlO&callback=JSONP_CALLBACK';
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Authorization, Lang'
    })
    return this.jsonp.get(apiURL).map( (resp:any) => resp._body.work_experience )
  }

  getCV() {
    let apiURL = this.firebaseURL + '/cv.json';
    return this.http.get(apiURL).map((resp:Response) => resp);
  }

  getHome() {
    let apiURL = this.firebaseURL + '/home.json';
    return this.http.get(apiURL).map((resp:Response) => resp);
  }
}
