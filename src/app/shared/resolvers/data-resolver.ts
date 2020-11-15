import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<Observable<any>> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    debugger;
    console.log('hehe');
    return this.dataService.downloadArrayOfStrings();
  }

}
