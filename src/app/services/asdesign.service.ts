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

  cosa: any[] = [
      {
        name: 'Cerbero',
        description: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        images: [
          'https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          'https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        ],
        url: 'https://www.google.es'
      }
    ];

  constructor(private jsonp: Jsonp) {
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
