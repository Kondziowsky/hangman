import { Injectable, } from '@angular/core';
import {HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  downloadArrayOfStrings() {
    debugger;
    return this.http.get('http://localhost:4200/assets/mock/answers.json');
  }
}


