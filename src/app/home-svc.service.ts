import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeSvcService {
  obj;
  result;
  server = 'http://35.211.58.67:8099/';

  constructor(private http: HttpClient) { }

  getTextList(route: string): Observable<any> {
    return this.http.get( this.server + 'getTextList?route=' + route );
  }

  getImgList(route: string): Observable<any> {
    return this.http.get( this.server + 'getImgList?route=' + route );
  }

  getText(route: string, name: string): Observable<any> {
    return this.http.get( this.server + 'getText?route=' + route + '&filename=' + name );
  }


}
