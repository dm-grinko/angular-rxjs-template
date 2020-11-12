import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, IData } from './data.service';
import { IUser, UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  // tslint:disable-next-line: variable-name
  private _userService: UserService;
  public get userService(): UserService {
    if (!this._userService) {
      this._userService = this.injector.get(UserService);
    }
    return this._userService;
  }

  // tslint:disable-next-line: variable-name
  private _dataService: DataService;
  public get dataService(): DataService {
    if (!this._dataService) {
      this._dataService = this.injector.get(DataService);
    }
    return this._dataService;
  }
  
  constructor(private injector: Injector) { }

  getUser(): Observable<IUser> {
    return this.userService.getUser();
  }

  getData(): Observable<IData> {
    return this.dataService.getData();
  }
}
