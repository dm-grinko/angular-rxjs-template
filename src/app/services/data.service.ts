import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export interface IData {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): Observable<IData> {
    return of({title: "Hello World"}) as Observable<IData>;
  }
}
