import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IData } from './services/data.service';
import { StreamService } from './services/stream.service';
import { IUser } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subs: Subscription[] = [];
  user: IUser;
  data: IData;

  constructor(private streamService: StreamService) { }

  ngOnInit() {
    this.subs.push(this.streamService.user.obs.subscribe(this.onGetUser.bind(this)));
    this.subs.push(this.streamService.data.obs.subscribe(this.onGetData.bind(this)));
  }

  onGetUser(user: any) {
      if (!user) {
        return this.streamService.getUser();
      }
      this.user = user;
  }

  onGetData(data: any) {
      if (!data) {
        return this.streamService.getData();
      }
      this.data = data;
  }

  ngOnDestroy() {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
