import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class MessageQueueService {
  private bus = new Subject<Action>();
  public bus$ = this.bus.asObservable();

  dispatch(action:Action) {
    console.log(`$action`,action);
    
    this.bus.next(action);
  }
}
