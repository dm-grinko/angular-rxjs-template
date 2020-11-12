import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUser {
  name: string;
  age: number;  
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): Observable<IUser> {
    return of({name: "Dmitry", age: 33});
  }
}
