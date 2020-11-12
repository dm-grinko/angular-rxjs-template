import { Injectable } from '@angular/core';
import { StreamResource } from '../models/resource';
import { FacadeService } from './facade.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  public user = new StreamResource();
  public data = new StreamResource();

  constructor(private facadeService: FacadeService) { }

  getUser() {
    this.user.request(() => this.facadeService.getUser());
  }

  getData() {
    this.data.request(() => this.facadeService.getData());
  }
}
