import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/do';

@Injectable()
export class AsdesignService {

  results = null;

  constructor(
    private jsonp: Jsonp,
    private http: HttpClient
  ) {
    console.log('asdesing service works');
    
  }

  getProjects() {
    let apiURL = `https://api.behance.net/v2/users/asaldanam2a11/projects?client_id=9P9QYEfzOkR7xVZAMfUdlic1UCjOInlO&callback=JSONP_CALLBACK`;
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Headers': 'Authorization, Lang'
    })
    return this.jsonp.get(apiURL).map( (resp:any) => resp.json().projects )
  }
}
